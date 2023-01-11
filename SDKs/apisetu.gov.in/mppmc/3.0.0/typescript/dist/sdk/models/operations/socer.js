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
exports.SocerResponse = exports.SocerRequest = exports.Socer504ApplicationJson = exports.Socer504ApplicationJsonErrorDescriptionEnum = exports.Socer504ApplicationJsonErrorEnum = exports.Socer503ApplicationJson = exports.Socer503ApplicationJsonErrorDescriptionEnum = exports.Socer503ApplicationJsonErrorEnum = exports.Socer502ApplicationJson = exports.Socer502ApplicationJsonErrorDescriptionEnum = exports.Socer502ApplicationJsonErrorEnum = exports.Socer500ApplicationJson = exports.Socer500ApplicationJsonErrorDescriptionEnum = exports.Socer500ApplicationJsonErrorEnum = exports.Socer404ApplicationJson = exports.Socer404ApplicationJsonErrorDescriptionEnum = exports.Socer404ApplicationJsonErrorEnum = exports.Socer401ApplicationJson = exports.Socer401ApplicationJsonErrorDescriptionEnum = exports.Socer401ApplicationJsonErrorEnum = exports.Socer400ApplicationJson = exports.Socer400ApplicationJsonErrorDescriptionEnum = exports.Socer400ApplicationJsonErrorEnum = exports.SocerSecurity = exports.SocerRequestBody = exports.SocerRequestBodyFormatEnum = exports.SocerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SocerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SocerRequestBodyCertificateParameters, _super);
    function SocerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=APPNO" }),
        __metadata("design:type", String)
    ], SocerRequestBodyCertificateParameters.prototype, "appno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Date_Of_Birth" }),
        __metadata("design:type", String)
    ], SocerRequestBodyCertificateParameters.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ENROLNO" }),
        __metadata("design:type", String)
    ], SocerRequestBodyCertificateParameters.prototype, "enrolno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TypOfCert" }),
        __metadata("design:type", String)
    ], SocerRequestBodyCertificateParameters.prototype, "typOfCert", void 0);
    return SocerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SocerRequestBodyCertificateParameters = SocerRequestBodyCertificateParameters;
var SocerRequestBodyFormatEnum;
(function (SocerRequestBodyFormatEnum) {
    SocerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SocerRequestBodyFormatEnum = exports.SocerRequestBodyFormatEnum || (exports.SocerRequestBodyFormatEnum = {}));
var SocerRequestBody = /** @class */ (function (_super) {
    __extends(SocerRequestBody, _super);
    function SocerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SocerRequestBodyCertificateParameters)
    ], SocerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SocerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SocerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SocerRequestBody.prototype, "txnId", void 0);
    return SocerRequestBody;
}(utils_1.SpeakeasyBase));
exports.SocerRequestBody = SocerRequestBody;
var SocerSecurity = /** @class */ (function (_super) {
    __extends(SocerSecurity, _super);
    function SocerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SocerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SocerSecurity.prototype, "clientId", void 0);
    return SocerSecurity;
}(utils_1.SpeakeasyBase));
exports.SocerSecurity = SocerSecurity;
var Socer400ApplicationJsonErrorEnum;
(function (Socer400ApplicationJsonErrorEnum) {
    Socer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Socer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Socer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Socer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Socer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Socer400ApplicationJsonErrorEnum = exports.Socer400ApplicationJsonErrorEnum || (exports.Socer400ApplicationJsonErrorEnum = {}));
var Socer400ApplicationJsonErrorDescriptionEnum;
(function (Socer400ApplicationJsonErrorDescriptionEnum) {
    Socer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Socer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Socer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Socer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Socer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Socer400ApplicationJsonErrorDescriptionEnum = exports.Socer400ApplicationJsonErrorDescriptionEnum || (exports.Socer400ApplicationJsonErrorDescriptionEnum = {}));
var Socer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer400ApplicationJson, _super);
    function Socer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer400ApplicationJson.prototype, "errorDescription", void 0);
    return Socer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Socer400ApplicationJson = Socer400ApplicationJson;
var Socer401ApplicationJsonErrorEnum;
(function (Socer401ApplicationJsonErrorEnum) {
    Socer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Socer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Socer401ApplicationJsonErrorEnum = exports.Socer401ApplicationJsonErrorEnum || (exports.Socer401ApplicationJsonErrorEnum = {}));
var Socer401ApplicationJsonErrorDescriptionEnum;
(function (Socer401ApplicationJsonErrorDescriptionEnum) {
    Socer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Socer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Socer401ApplicationJsonErrorDescriptionEnum = exports.Socer401ApplicationJsonErrorDescriptionEnum || (exports.Socer401ApplicationJsonErrorDescriptionEnum = {}));
var Socer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer401ApplicationJson, _super);
    function Socer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer401ApplicationJson.prototype, "errorDescription", void 0);
    return Socer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Socer401ApplicationJson = Socer401ApplicationJson;
var Socer404ApplicationJsonErrorEnum;
(function (Socer404ApplicationJsonErrorEnum) {
    Socer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Socer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Socer404ApplicationJsonErrorEnum = exports.Socer404ApplicationJsonErrorEnum || (exports.Socer404ApplicationJsonErrorEnum = {}));
var Socer404ApplicationJsonErrorDescriptionEnum;
(function (Socer404ApplicationJsonErrorDescriptionEnum) {
    Socer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Socer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Socer404ApplicationJsonErrorDescriptionEnum = exports.Socer404ApplicationJsonErrorDescriptionEnum || (exports.Socer404ApplicationJsonErrorDescriptionEnum = {}));
var Socer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer404ApplicationJson, _super);
    function Socer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer404ApplicationJson.prototype, "errorDescription", void 0);
    return Socer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Socer404ApplicationJson = Socer404ApplicationJson;
var Socer500ApplicationJsonErrorEnum;
(function (Socer500ApplicationJsonErrorEnum) {
    Socer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Socer500ApplicationJsonErrorEnum = exports.Socer500ApplicationJsonErrorEnum || (exports.Socer500ApplicationJsonErrorEnum = {}));
var Socer500ApplicationJsonErrorDescriptionEnum;
(function (Socer500ApplicationJsonErrorDescriptionEnum) {
    Socer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Socer500ApplicationJsonErrorDescriptionEnum = exports.Socer500ApplicationJsonErrorDescriptionEnum || (exports.Socer500ApplicationJsonErrorDescriptionEnum = {}));
var Socer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer500ApplicationJson, _super);
    function Socer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer500ApplicationJson.prototype, "errorDescription", void 0);
    return Socer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Socer500ApplicationJson = Socer500ApplicationJson;
var Socer502ApplicationJsonErrorEnum;
(function (Socer502ApplicationJsonErrorEnum) {
    Socer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Socer502ApplicationJsonErrorEnum = exports.Socer502ApplicationJsonErrorEnum || (exports.Socer502ApplicationJsonErrorEnum = {}));
var Socer502ApplicationJsonErrorDescriptionEnum;
(function (Socer502ApplicationJsonErrorDescriptionEnum) {
    Socer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Socer502ApplicationJsonErrorDescriptionEnum = exports.Socer502ApplicationJsonErrorDescriptionEnum || (exports.Socer502ApplicationJsonErrorDescriptionEnum = {}));
var Socer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer502ApplicationJson, _super);
    function Socer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer502ApplicationJson.prototype, "errorDescription", void 0);
    return Socer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Socer502ApplicationJson = Socer502ApplicationJson;
var Socer503ApplicationJsonErrorEnum;
(function (Socer503ApplicationJsonErrorEnum) {
    Socer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Socer503ApplicationJsonErrorEnum = exports.Socer503ApplicationJsonErrorEnum || (exports.Socer503ApplicationJsonErrorEnum = {}));
var Socer503ApplicationJsonErrorDescriptionEnum;
(function (Socer503ApplicationJsonErrorDescriptionEnum) {
    Socer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Socer503ApplicationJsonErrorDescriptionEnum = exports.Socer503ApplicationJsonErrorDescriptionEnum || (exports.Socer503ApplicationJsonErrorDescriptionEnum = {}));
var Socer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer503ApplicationJson, _super);
    function Socer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer503ApplicationJson.prototype, "errorDescription", void 0);
    return Socer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Socer503ApplicationJson = Socer503ApplicationJson;
var Socer504ApplicationJsonErrorEnum;
(function (Socer504ApplicationJsonErrorEnum) {
    Socer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Socer504ApplicationJsonErrorEnum = exports.Socer504ApplicationJsonErrorEnum || (exports.Socer504ApplicationJsonErrorEnum = {}));
var Socer504ApplicationJsonErrorDescriptionEnum;
(function (Socer504ApplicationJsonErrorDescriptionEnum) {
    Socer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Socer504ApplicationJsonErrorDescriptionEnum = exports.Socer504ApplicationJsonErrorDescriptionEnum || (exports.Socer504ApplicationJsonErrorDescriptionEnum = {}));
var Socer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Socer504ApplicationJson, _super);
    function Socer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Socer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Socer504ApplicationJson.prototype, "errorDescription", void 0);
    return Socer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Socer504ApplicationJson = Socer504ApplicationJson;
var SocerRequest = /** @class */ (function (_super) {
    __extends(SocerRequest, _super);
    function SocerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SocerRequestBody)
    ], SocerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SocerSecurity)
    ], SocerRequest.prototype, "security", void 0);
    return SocerRequest;
}(utils_1.SpeakeasyBase));
exports.SocerRequest = SocerRequest;
var SocerResponse = /** @class */ (function (_super) {
    __extends(SocerResponse, _super);
    function SocerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SocerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SocerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Socer400ApplicationJson)
    ], SocerResponse.prototype, "socer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Socer401ApplicationJson)
    ], SocerResponse.prototype, "socer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Socer404ApplicationJson)
    ], SocerResponse.prototype, "socer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Socer500ApplicationJson)
    ], SocerResponse.prototype, "socer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Socer502ApplicationJson)
    ], SocerResponse.prototype, "socer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Socer503ApplicationJson)
    ], SocerResponse.prototype, "socer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Socer504ApplicationJson)
    ], SocerResponse.prototype, "socer504ApplicationJSONObject", void 0);
    return SocerResponse;
}(utils_1.SpeakeasyBase));
exports.SocerResponse = SocerResponse;
