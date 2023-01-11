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
exports.DncerResponse = exports.DncerRequest = exports.Dncer504ApplicationJson = exports.Dncer504ApplicationJsonErrorDescriptionEnum = exports.Dncer504ApplicationJsonErrorEnum = exports.Dncer503ApplicationJson = exports.Dncer503ApplicationJsonErrorDescriptionEnum = exports.Dncer503ApplicationJsonErrorEnum = exports.Dncer502ApplicationJson = exports.Dncer502ApplicationJsonErrorDescriptionEnum = exports.Dncer502ApplicationJsonErrorEnum = exports.Dncer500ApplicationJson = exports.Dncer500ApplicationJsonErrorDescriptionEnum = exports.Dncer500ApplicationJsonErrorEnum = exports.Dncer404ApplicationJson = exports.Dncer404ApplicationJsonErrorDescriptionEnum = exports.Dncer404ApplicationJsonErrorEnum = exports.Dncer401ApplicationJson = exports.Dncer401ApplicationJsonErrorDescriptionEnum = exports.Dncer401ApplicationJsonErrorEnum = exports.Dncer400ApplicationJson = exports.Dncer400ApplicationJsonErrorDescriptionEnum = exports.Dncer400ApplicationJsonErrorEnum = exports.DncerSecurity = exports.DncerRequestBody = exports.DncerRequestBodyFormatEnum = exports.DncerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DncerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DncerRequestBodyCertificateParameters, _super);
    function DncerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], DncerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], DncerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return DncerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DncerRequestBodyCertificateParameters = DncerRequestBodyCertificateParameters;
var DncerRequestBodyFormatEnum;
(function (DncerRequestBodyFormatEnum) {
    DncerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DncerRequestBodyFormatEnum = exports.DncerRequestBodyFormatEnum || (exports.DncerRequestBodyFormatEnum = {}));
var DncerRequestBody = /** @class */ (function (_super) {
    __extends(DncerRequestBody, _super);
    function DncerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DncerRequestBodyCertificateParameters)
    ], DncerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DncerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DncerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DncerRequestBody.prototype, "txnId", void 0);
    return DncerRequestBody;
}(utils_1.SpeakeasyBase));
exports.DncerRequestBody = DncerRequestBody;
var DncerSecurity = /** @class */ (function (_super) {
    __extends(DncerSecurity, _super);
    function DncerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DncerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DncerSecurity.prototype, "clientId", void 0);
    return DncerSecurity;
}(utils_1.SpeakeasyBase));
exports.DncerSecurity = DncerSecurity;
var Dncer400ApplicationJsonErrorEnum;
(function (Dncer400ApplicationJsonErrorEnum) {
    Dncer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dncer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dncer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dncer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dncer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dncer400ApplicationJsonErrorEnum = exports.Dncer400ApplicationJsonErrorEnum || (exports.Dncer400ApplicationJsonErrorEnum = {}));
var Dncer400ApplicationJsonErrorDescriptionEnum;
(function (Dncer400ApplicationJsonErrorDescriptionEnum) {
    Dncer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dncer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dncer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dncer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dncer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dncer400ApplicationJsonErrorDescriptionEnum = exports.Dncer400ApplicationJsonErrorDescriptionEnum || (exports.Dncer400ApplicationJsonErrorDescriptionEnum = {}));
var Dncer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dncer400ApplicationJson, _super);
    function Dncer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dncer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dncer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dncer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dncer400ApplicationJson = Dncer400ApplicationJson;
var Dncer401ApplicationJsonErrorEnum;
(function (Dncer401ApplicationJsonErrorEnum) {
    Dncer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dncer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dncer401ApplicationJsonErrorEnum = exports.Dncer401ApplicationJsonErrorEnum || (exports.Dncer401ApplicationJsonErrorEnum = {}));
var Dncer401ApplicationJsonErrorDescriptionEnum;
(function (Dncer401ApplicationJsonErrorDescriptionEnum) {
    Dncer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dncer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dncer401ApplicationJsonErrorDescriptionEnum = exports.Dncer401ApplicationJsonErrorDescriptionEnum || (exports.Dncer401ApplicationJsonErrorDescriptionEnum = {}));
var Dncer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dncer401ApplicationJson, _super);
    function Dncer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dncer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dncer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dncer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dncer401ApplicationJson = Dncer401ApplicationJson;
var Dncer404ApplicationJsonErrorEnum;
(function (Dncer404ApplicationJsonErrorEnum) {
    Dncer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dncer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dncer404ApplicationJsonErrorEnum = exports.Dncer404ApplicationJsonErrorEnum || (exports.Dncer404ApplicationJsonErrorEnum = {}));
var Dncer404ApplicationJsonErrorDescriptionEnum;
(function (Dncer404ApplicationJsonErrorDescriptionEnum) {
    Dncer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dncer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dncer404ApplicationJsonErrorDescriptionEnum = exports.Dncer404ApplicationJsonErrorDescriptionEnum || (exports.Dncer404ApplicationJsonErrorDescriptionEnum = {}));
var Dncer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dncer404ApplicationJson, _super);
    function Dncer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dncer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dncer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dncer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dncer404ApplicationJson = Dncer404ApplicationJson;
var Dncer500ApplicationJsonErrorEnum;
(function (Dncer500ApplicationJsonErrorEnum) {
    Dncer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dncer500ApplicationJsonErrorEnum = exports.Dncer500ApplicationJsonErrorEnum || (exports.Dncer500ApplicationJsonErrorEnum = {}));
var Dncer500ApplicationJsonErrorDescriptionEnum;
(function (Dncer500ApplicationJsonErrorDescriptionEnum) {
    Dncer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dncer500ApplicationJsonErrorDescriptionEnum = exports.Dncer500ApplicationJsonErrorDescriptionEnum || (exports.Dncer500ApplicationJsonErrorDescriptionEnum = {}));
var Dncer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dncer500ApplicationJson, _super);
    function Dncer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dncer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dncer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dncer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dncer500ApplicationJson = Dncer500ApplicationJson;
var Dncer502ApplicationJsonErrorEnum;
(function (Dncer502ApplicationJsonErrorEnum) {
    Dncer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dncer502ApplicationJsonErrorEnum = exports.Dncer502ApplicationJsonErrorEnum || (exports.Dncer502ApplicationJsonErrorEnum = {}));
var Dncer502ApplicationJsonErrorDescriptionEnum;
(function (Dncer502ApplicationJsonErrorDescriptionEnum) {
    Dncer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dncer502ApplicationJsonErrorDescriptionEnum = exports.Dncer502ApplicationJsonErrorDescriptionEnum || (exports.Dncer502ApplicationJsonErrorDescriptionEnum = {}));
var Dncer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dncer502ApplicationJson, _super);
    function Dncer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dncer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dncer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dncer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dncer502ApplicationJson = Dncer502ApplicationJson;
var Dncer503ApplicationJsonErrorEnum;
(function (Dncer503ApplicationJsonErrorEnum) {
    Dncer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dncer503ApplicationJsonErrorEnum = exports.Dncer503ApplicationJsonErrorEnum || (exports.Dncer503ApplicationJsonErrorEnum = {}));
var Dncer503ApplicationJsonErrorDescriptionEnum;
(function (Dncer503ApplicationJsonErrorDescriptionEnum) {
    Dncer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dncer503ApplicationJsonErrorDescriptionEnum = exports.Dncer503ApplicationJsonErrorDescriptionEnum || (exports.Dncer503ApplicationJsonErrorDescriptionEnum = {}));
var Dncer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dncer503ApplicationJson, _super);
    function Dncer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dncer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dncer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dncer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dncer503ApplicationJson = Dncer503ApplicationJson;
var Dncer504ApplicationJsonErrorEnum;
(function (Dncer504ApplicationJsonErrorEnum) {
    Dncer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dncer504ApplicationJsonErrorEnum = exports.Dncer504ApplicationJsonErrorEnum || (exports.Dncer504ApplicationJsonErrorEnum = {}));
var Dncer504ApplicationJsonErrorDescriptionEnum;
(function (Dncer504ApplicationJsonErrorDescriptionEnum) {
    Dncer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dncer504ApplicationJsonErrorDescriptionEnum = exports.Dncer504ApplicationJsonErrorDescriptionEnum || (exports.Dncer504ApplicationJsonErrorDescriptionEnum = {}));
var Dncer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dncer504ApplicationJson, _super);
    function Dncer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dncer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dncer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dncer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dncer504ApplicationJson = Dncer504ApplicationJson;
var DncerRequest = /** @class */ (function (_super) {
    __extends(DncerRequest, _super);
    function DncerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DncerRequestBody)
    ], DncerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DncerSecurity)
    ], DncerRequest.prototype, "security", void 0);
    return DncerRequest;
}(utils_1.SpeakeasyBase));
exports.DncerRequest = DncerRequest;
var DncerResponse = /** @class */ (function (_super) {
    __extends(DncerResponse, _super);
    function DncerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DncerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DncerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dncer400ApplicationJson)
    ], DncerResponse.prototype, "dncer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dncer401ApplicationJson)
    ], DncerResponse.prototype, "dncer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dncer404ApplicationJson)
    ], DncerResponse.prototype, "dncer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dncer500ApplicationJson)
    ], DncerResponse.prototype, "dncer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dncer502ApplicationJson)
    ], DncerResponse.prototype, "dncer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dncer503ApplicationJson)
    ], DncerResponse.prototype, "dncer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dncer504ApplicationJson)
    ], DncerResponse.prototype, "dncer504ApplicationJSONObject", void 0);
    return DncerResponse;
}(utils_1.SpeakeasyBase));
exports.DncerResponse = DncerResponse;
