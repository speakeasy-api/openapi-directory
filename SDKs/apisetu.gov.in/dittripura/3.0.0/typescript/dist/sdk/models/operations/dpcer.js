"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DpcerResponse = exports.DpcerRequest = exports.Dpcer504ApplicationJson = exports.Dpcer504ApplicationJsonErrorDescriptionEnum = exports.Dpcer504ApplicationJsonErrorEnum = exports.Dpcer503ApplicationJson = exports.Dpcer503ApplicationJsonErrorDescriptionEnum = exports.Dpcer503ApplicationJsonErrorEnum = exports.Dpcer502ApplicationJson = exports.Dpcer502ApplicationJsonErrorDescriptionEnum = exports.Dpcer502ApplicationJsonErrorEnum = exports.Dpcer500ApplicationJson = exports.Dpcer500ApplicationJsonErrorDescriptionEnum = exports.Dpcer500ApplicationJsonErrorEnum = exports.Dpcer404ApplicationJson = exports.Dpcer404ApplicationJsonErrorDescriptionEnum = exports.Dpcer404ApplicationJsonErrorEnum = exports.Dpcer401ApplicationJson = exports.Dpcer401ApplicationJsonErrorDescriptionEnum = exports.Dpcer401ApplicationJsonErrorEnum = exports.Dpcer400ApplicationJson = exports.Dpcer400ApplicationJsonErrorDescriptionEnum = exports.Dpcer400ApplicationJsonErrorEnum = exports.DpcerSecurity = exports.DpcerRequestBody = exports.DpcerRequestBodyFormatEnum = exports.DpcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DpcerRequestBodyCertificateParameters, _super);
    function DpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], DpcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], DpcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return DpcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DpcerRequestBodyCertificateParameters = DpcerRequestBodyCertificateParameters;
var DpcerRequestBodyFormatEnum;
(function (DpcerRequestBodyFormatEnum) {
    DpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DpcerRequestBodyFormatEnum = exports.DpcerRequestBodyFormatEnum || (exports.DpcerRequestBodyFormatEnum = {}));
var DpcerRequestBody = /** @class */ (function (_super) {
    __extends(DpcerRequestBody, _super);
    function DpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DpcerRequestBodyCertificateParameters)
    ], DpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DpcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DpcerRequestBody.prototype, "txnId", void 0);
    return DpcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.DpcerRequestBody = DpcerRequestBody;
var DpcerSecurity = /** @class */ (function (_super) {
    __extends(DpcerSecurity, _super);
    function DpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DpcerSecurity.prototype, "clientId", void 0);
    return DpcerSecurity;
}(utils_1.SpeakeasyBase));
exports.DpcerSecurity = DpcerSecurity;
var Dpcer400ApplicationJsonErrorEnum;
(function (Dpcer400ApplicationJsonErrorEnum) {
    Dpcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dpcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dpcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dpcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dpcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dpcer400ApplicationJsonErrorEnum = exports.Dpcer400ApplicationJsonErrorEnum || (exports.Dpcer400ApplicationJsonErrorEnum = {}));
var Dpcer400ApplicationJsonErrorDescriptionEnum;
(function (Dpcer400ApplicationJsonErrorDescriptionEnum) {
    Dpcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dpcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dpcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dpcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dpcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dpcer400ApplicationJsonErrorDescriptionEnum = exports.Dpcer400ApplicationJsonErrorDescriptionEnum || (exports.Dpcer400ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer400ApplicationJson, _super);
    function Dpcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpcer400ApplicationJson = Dpcer400ApplicationJson;
var Dpcer401ApplicationJsonErrorEnum;
(function (Dpcer401ApplicationJsonErrorEnum) {
    Dpcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dpcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dpcer401ApplicationJsonErrorEnum = exports.Dpcer401ApplicationJsonErrorEnum || (exports.Dpcer401ApplicationJsonErrorEnum = {}));
var Dpcer401ApplicationJsonErrorDescriptionEnum;
(function (Dpcer401ApplicationJsonErrorDescriptionEnum) {
    Dpcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dpcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dpcer401ApplicationJsonErrorDescriptionEnum = exports.Dpcer401ApplicationJsonErrorDescriptionEnum || (exports.Dpcer401ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer401ApplicationJson, _super);
    function Dpcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpcer401ApplicationJson = Dpcer401ApplicationJson;
var Dpcer404ApplicationJsonErrorEnum;
(function (Dpcer404ApplicationJsonErrorEnum) {
    Dpcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dpcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dpcer404ApplicationJsonErrorEnum = exports.Dpcer404ApplicationJsonErrorEnum || (exports.Dpcer404ApplicationJsonErrorEnum = {}));
var Dpcer404ApplicationJsonErrorDescriptionEnum;
(function (Dpcer404ApplicationJsonErrorDescriptionEnum) {
    Dpcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dpcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dpcer404ApplicationJsonErrorDescriptionEnum = exports.Dpcer404ApplicationJsonErrorDescriptionEnum || (exports.Dpcer404ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer404ApplicationJson, _super);
    function Dpcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpcer404ApplicationJson = Dpcer404ApplicationJson;
var Dpcer500ApplicationJsonErrorEnum;
(function (Dpcer500ApplicationJsonErrorEnum) {
    Dpcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dpcer500ApplicationJsonErrorEnum = exports.Dpcer500ApplicationJsonErrorEnum || (exports.Dpcer500ApplicationJsonErrorEnum = {}));
var Dpcer500ApplicationJsonErrorDescriptionEnum;
(function (Dpcer500ApplicationJsonErrorDescriptionEnum) {
    Dpcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dpcer500ApplicationJsonErrorDescriptionEnum = exports.Dpcer500ApplicationJsonErrorDescriptionEnum || (exports.Dpcer500ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer500ApplicationJson, _super);
    function Dpcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpcer500ApplicationJson = Dpcer500ApplicationJson;
var Dpcer502ApplicationJsonErrorEnum;
(function (Dpcer502ApplicationJsonErrorEnum) {
    Dpcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dpcer502ApplicationJsonErrorEnum = exports.Dpcer502ApplicationJsonErrorEnum || (exports.Dpcer502ApplicationJsonErrorEnum = {}));
var Dpcer502ApplicationJsonErrorDescriptionEnum;
(function (Dpcer502ApplicationJsonErrorDescriptionEnum) {
    Dpcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dpcer502ApplicationJsonErrorDescriptionEnum = exports.Dpcer502ApplicationJsonErrorDescriptionEnum || (exports.Dpcer502ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer502ApplicationJson, _super);
    function Dpcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpcer502ApplicationJson = Dpcer502ApplicationJson;
var Dpcer503ApplicationJsonErrorEnum;
(function (Dpcer503ApplicationJsonErrorEnum) {
    Dpcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dpcer503ApplicationJsonErrorEnum = exports.Dpcer503ApplicationJsonErrorEnum || (exports.Dpcer503ApplicationJsonErrorEnum = {}));
var Dpcer503ApplicationJsonErrorDescriptionEnum;
(function (Dpcer503ApplicationJsonErrorDescriptionEnum) {
    Dpcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dpcer503ApplicationJsonErrorDescriptionEnum = exports.Dpcer503ApplicationJsonErrorDescriptionEnum || (exports.Dpcer503ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer503ApplicationJson, _super);
    function Dpcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpcer503ApplicationJson = Dpcer503ApplicationJson;
var Dpcer504ApplicationJsonErrorEnum;
(function (Dpcer504ApplicationJsonErrorEnum) {
    Dpcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dpcer504ApplicationJsonErrorEnum = exports.Dpcer504ApplicationJsonErrorEnum || (exports.Dpcer504ApplicationJsonErrorEnum = {}));
var Dpcer504ApplicationJsonErrorDescriptionEnum;
(function (Dpcer504ApplicationJsonErrorDescriptionEnum) {
    Dpcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dpcer504ApplicationJsonErrorDescriptionEnum = exports.Dpcer504ApplicationJsonErrorDescriptionEnum || (exports.Dpcer504ApplicationJsonErrorDescriptionEnum = {}));
var Dpcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dpcer504ApplicationJson, _super);
    function Dpcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dpcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dpcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dpcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dpcer504ApplicationJson = Dpcer504ApplicationJson;
var DpcerRequest = /** @class */ (function (_super) {
    __extends(DpcerRequest, _super);
    function DpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DpcerRequestBody)
    ], DpcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DpcerSecurity)
    ], DpcerRequest.prototype, "security", void 0);
    return DpcerRequest;
}(utils_1.SpeakeasyBase));
exports.DpcerRequest = DpcerRequest;
var DpcerResponse = /** @class */ (function (_super) {
    __extends(DpcerResponse, _super);
    function DpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DpcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpcer400ApplicationJson)
    ], DpcerResponse.prototype, "dpcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpcer401ApplicationJson)
    ], DpcerResponse.prototype, "dpcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpcer404ApplicationJson)
    ], DpcerResponse.prototype, "dpcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpcer500ApplicationJson)
    ], DpcerResponse.prototype, "dpcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpcer502ApplicationJson)
    ], DpcerResponse.prototype, "dpcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpcer503ApplicationJson)
    ], DpcerResponse.prototype, "dpcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dpcer504ApplicationJson)
    ], DpcerResponse.prototype, "dpcer504ApplicationJSONObject", void 0);
    return DpcerResponse;
}(utils_1.SpeakeasyBase));
exports.DpcerResponse = DpcerResponse;
