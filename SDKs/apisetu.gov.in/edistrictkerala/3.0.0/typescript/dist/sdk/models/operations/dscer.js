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
exports.DscerResponse = exports.DscerRequest = exports.Dscer504ApplicationJson = exports.Dscer504ApplicationJsonErrorDescriptionEnum = exports.Dscer504ApplicationJsonErrorEnum = exports.Dscer503ApplicationJson = exports.Dscer503ApplicationJsonErrorDescriptionEnum = exports.Dscer503ApplicationJsonErrorEnum = exports.Dscer502ApplicationJson = exports.Dscer502ApplicationJsonErrorDescriptionEnum = exports.Dscer502ApplicationJsonErrorEnum = exports.Dscer500ApplicationJson = exports.Dscer500ApplicationJsonErrorDescriptionEnum = exports.Dscer500ApplicationJsonErrorEnum = exports.Dscer404ApplicationJson = exports.Dscer404ApplicationJsonErrorDescriptionEnum = exports.Dscer404ApplicationJsonErrorEnum = exports.Dscer401ApplicationJson = exports.Dscer401ApplicationJsonErrorDescriptionEnum = exports.Dscer401ApplicationJsonErrorEnum = exports.Dscer400ApplicationJson = exports.Dscer400ApplicationJsonErrorDescriptionEnum = exports.Dscer400ApplicationJsonErrorEnum = exports.DscerSecurity = exports.DscerRequestBody = exports.DscerRequestBodyFormatEnum = exports.DscerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DscerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DscerRequestBodyCertificateParameters, _super);
    function DscerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], DscerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], DscerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], DscerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return DscerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DscerRequestBodyCertificateParameters = DscerRequestBodyCertificateParameters;
var DscerRequestBodyFormatEnum;
(function (DscerRequestBodyFormatEnum) {
    DscerRequestBodyFormatEnum["Pdf"] = "pdf";
})(DscerRequestBodyFormatEnum = exports.DscerRequestBodyFormatEnum || (exports.DscerRequestBodyFormatEnum = {}));
var DscerRequestBody = /** @class */ (function (_super) {
    __extends(DscerRequestBody, _super);
    function DscerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DscerRequestBodyCertificateParameters)
    ], DscerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DscerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DscerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DscerRequestBody.prototype, "txnId", void 0);
    return DscerRequestBody;
}(utils_1.SpeakeasyBase));
exports.DscerRequestBody = DscerRequestBody;
var DscerSecurity = /** @class */ (function (_super) {
    __extends(DscerSecurity, _super);
    function DscerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DscerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DscerSecurity.prototype, "clientId", void 0);
    return DscerSecurity;
}(utils_1.SpeakeasyBase));
exports.DscerSecurity = DscerSecurity;
var Dscer400ApplicationJsonErrorEnum;
(function (Dscer400ApplicationJsonErrorEnum) {
    Dscer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dscer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dscer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dscer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dscer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dscer400ApplicationJsonErrorEnum = exports.Dscer400ApplicationJsonErrorEnum || (exports.Dscer400ApplicationJsonErrorEnum = {}));
var Dscer400ApplicationJsonErrorDescriptionEnum;
(function (Dscer400ApplicationJsonErrorDescriptionEnum) {
    Dscer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dscer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dscer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dscer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dscer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dscer400ApplicationJsonErrorDescriptionEnum = exports.Dscer400ApplicationJsonErrorDescriptionEnum || (exports.Dscer400ApplicationJsonErrorDescriptionEnum = {}));
var Dscer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dscer400ApplicationJson, _super);
    function Dscer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dscer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dscer400ApplicationJson.prototype, "errorDescription", void 0);
    return Dscer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dscer400ApplicationJson = Dscer400ApplicationJson;
var Dscer401ApplicationJsonErrorEnum;
(function (Dscer401ApplicationJsonErrorEnum) {
    Dscer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dscer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dscer401ApplicationJsonErrorEnum = exports.Dscer401ApplicationJsonErrorEnum || (exports.Dscer401ApplicationJsonErrorEnum = {}));
var Dscer401ApplicationJsonErrorDescriptionEnum;
(function (Dscer401ApplicationJsonErrorDescriptionEnum) {
    Dscer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dscer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dscer401ApplicationJsonErrorDescriptionEnum = exports.Dscer401ApplicationJsonErrorDescriptionEnum || (exports.Dscer401ApplicationJsonErrorDescriptionEnum = {}));
var Dscer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dscer401ApplicationJson, _super);
    function Dscer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dscer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dscer401ApplicationJson.prototype, "errorDescription", void 0);
    return Dscer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dscer401ApplicationJson = Dscer401ApplicationJson;
var Dscer404ApplicationJsonErrorEnum;
(function (Dscer404ApplicationJsonErrorEnum) {
    Dscer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dscer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dscer404ApplicationJsonErrorEnum = exports.Dscer404ApplicationJsonErrorEnum || (exports.Dscer404ApplicationJsonErrorEnum = {}));
var Dscer404ApplicationJsonErrorDescriptionEnum;
(function (Dscer404ApplicationJsonErrorDescriptionEnum) {
    Dscer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dscer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dscer404ApplicationJsonErrorDescriptionEnum = exports.Dscer404ApplicationJsonErrorDescriptionEnum || (exports.Dscer404ApplicationJsonErrorDescriptionEnum = {}));
var Dscer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dscer404ApplicationJson, _super);
    function Dscer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dscer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dscer404ApplicationJson.prototype, "errorDescription", void 0);
    return Dscer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dscer404ApplicationJson = Dscer404ApplicationJson;
var Dscer500ApplicationJsonErrorEnum;
(function (Dscer500ApplicationJsonErrorEnum) {
    Dscer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dscer500ApplicationJsonErrorEnum = exports.Dscer500ApplicationJsonErrorEnum || (exports.Dscer500ApplicationJsonErrorEnum = {}));
var Dscer500ApplicationJsonErrorDescriptionEnum;
(function (Dscer500ApplicationJsonErrorDescriptionEnum) {
    Dscer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dscer500ApplicationJsonErrorDescriptionEnum = exports.Dscer500ApplicationJsonErrorDescriptionEnum || (exports.Dscer500ApplicationJsonErrorDescriptionEnum = {}));
var Dscer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dscer500ApplicationJson, _super);
    function Dscer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dscer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dscer500ApplicationJson.prototype, "errorDescription", void 0);
    return Dscer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dscer500ApplicationJson = Dscer500ApplicationJson;
var Dscer502ApplicationJsonErrorEnum;
(function (Dscer502ApplicationJsonErrorEnum) {
    Dscer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dscer502ApplicationJsonErrorEnum = exports.Dscer502ApplicationJsonErrorEnum || (exports.Dscer502ApplicationJsonErrorEnum = {}));
var Dscer502ApplicationJsonErrorDescriptionEnum;
(function (Dscer502ApplicationJsonErrorDescriptionEnum) {
    Dscer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dscer502ApplicationJsonErrorDescriptionEnum = exports.Dscer502ApplicationJsonErrorDescriptionEnum || (exports.Dscer502ApplicationJsonErrorDescriptionEnum = {}));
var Dscer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dscer502ApplicationJson, _super);
    function Dscer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dscer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dscer502ApplicationJson.prototype, "errorDescription", void 0);
    return Dscer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dscer502ApplicationJson = Dscer502ApplicationJson;
var Dscer503ApplicationJsonErrorEnum;
(function (Dscer503ApplicationJsonErrorEnum) {
    Dscer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dscer503ApplicationJsonErrorEnum = exports.Dscer503ApplicationJsonErrorEnum || (exports.Dscer503ApplicationJsonErrorEnum = {}));
var Dscer503ApplicationJsonErrorDescriptionEnum;
(function (Dscer503ApplicationJsonErrorDescriptionEnum) {
    Dscer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dscer503ApplicationJsonErrorDescriptionEnum = exports.Dscer503ApplicationJsonErrorDescriptionEnum || (exports.Dscer503ApplicationJsonErrorDescriptionEnum = {}));
var Dscer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dscer503ApplicationJson, _super);
    function Dscer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dscer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dscer503ApplicationJson.prototype, "errorDescription", void 0);
    return Dscer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dscer503ApplicationJson = Dscer503ApplicationJson;
var Dscer504ApplicationJsonErrorEnum;
(function (Dscer504ApplicationJsonErrorEnum) {
    Dscer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dscer504ApplicationJsonErrorEnum = exports.Dscer504ApplicationJsonErrorEnum || (exports.Dscer504ApplicationJsonErrorEnum = {}));
var Dscer504ApplicationJsonErrorDescriptionEnum;
(function (Dscer504ApplicationJsonErrorDescriptionEnum) {
    Dscer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dscer504ApplicationJsonErrorDescriptionEnum = exports.Dscer504ApplicationJsonErrorDescriptionEnum || (exports.Dscer504ApplicationJsonErrorDescriptionEnum = {}));
var Dscer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dscer504ApplicationJson, _super);
    function Dscer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dscer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dscer504ApplicationJson.prototype, "errorDescription", void 0);
    return Dscer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dscer504ApplicationJson = Dscer504ApplicationJson;
var DscerRequest = /** @class */ (function (_super) {
    __extends(DscerRequest, _super);
    function DscerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DscerRequestBody)
    ], DscerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DscerSecurity)
    ], DscerRequest.prototype, "security", void 0);
    return DscerRequest;
}(utils_1.SpeakeasyBase));
exports.DscerRequest = DscerRequest;
var DscerResponse = /** @class */ (function (_super) {
    __extends(DscerResponse, _super);
    function DscerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DscerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DscerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer400ApplicationJson)
    ], DscerResponse.prototype, "dscer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer401ApplicationJson)
    ], DscerResponse.prototype, "dscer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer404ApplicationJson)
    ], DscerResponse.prototype, "dscer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer500ApplicationJson)
    ], DscerResponse.prototype, "dscer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer502ApplicationJson)
    ], DscerResponse.prototype, "dscer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer503ApplicationJson)
    ], DscerResponse.prototype, "dscer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dscer504ApplicationJson)
    ], DscerResponse.prototype, "dscer504ApplicationJSONObject", void 0);
    return DscerResponse;
}(utils_1.SpeakeasyBase));
exports.DscerResponse = DscerResponse;
