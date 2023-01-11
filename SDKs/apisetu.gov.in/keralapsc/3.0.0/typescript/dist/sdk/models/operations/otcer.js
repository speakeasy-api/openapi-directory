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
exports.OtcerResponse = exports.OtcerRequest = exports.Otcer504ApplicationJson = exports.Otcer504ApplicationJsonErrorDescriptionEnum = exports.Otcer504ApplicationJsonErrorEnum = exports.Otcer503ApplicationJson = exports.Otcer503ApplicationJsonErrorDescriptionEnum = exports.Otcer503ApplicationJsonErrorEnum = exports.Otcer502ApplicationJson = exports.Otcer502ApplicationJsonErrorDescriptionEnum = exports.Otcer502ApplicationJsonErrorEnum = exports.Otcer500ApplicationJson = exports.Otcer500ApplicationJsonErrorDescriptionEnum = exports.Otcer500ApplicationJsonErrorEnum = exports.Otcer404ApplicationJson = exports.Otcer404ApplicationJsonErrorDescriptionEnum = exports.Otcer404ApplicationJsonErrorEnum = exports.Otcer401ApplicationJson = exports.Otcer401ApplicationJsonErrorDescriptionEnum = exports.Otcer401ApplicationJsonErrorEnum = exports.Otcer400ApplicationJson = exports.Otcer400ApplicationJsonErrorDescriptionEnum = exports.Otcer400ApplicationJsonErrorEnum = exports.OtcerSecurity = exports.OtcerRequestBody = exports.OtcerRequestBodyFormatEnum = exports.OtcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var OtcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(OtcerRequestBodyCertificateParameters, _super);
    function OtcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], OtcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], OtcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], OtcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return OtcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.OtcerRequestBodyCertificateParameters = OtcerRequestBodyCertificateParameters;
var OtcerRequestBodyFormatEnum;
(function (OtcerRequestBodyFormatEnum) {
    OtcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(OtcerRequestBodyFormatEnum = exports.OtcerRequestBodyFormatEnum || (exports.OtcerRequestBodyFormatEnum = {}));
var OtcerRequestBody = /** @class */ (function (_super) {
    __extends(OtcerRequestBody, _super);
    function OtcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", OtcerRequestBodyCertificateParameters)
    ], OtcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], OtcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], OtcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], OtcerRequestBody.prototype, "txnId", void 0);
    return OtcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.OtcerRequestBody = OtcerRequestBody;
var OtcerSecurity = /** @class */ (function (_super) {
    __extends(OtcerSecurity, _super);
    function OtcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], OtcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], OtcerSecurity.prototype, "clientId", void 0);
    return OtcerSecurity;
}(utils_1.SpeakeasyBase));
exports.OtcerSecurity = OtcerSecurity;
var Otcer400ApplicationJsonErrorEnum;
(function (Otcer400ApplicationJsonErrorEnum) {
    Otcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Otcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Otcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Otcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Otcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Otcer400ApplicationJsonErrorEnum = exports.Otcer400ApplicationJsonErrorEnum || (exports.Otcer400ApplicationJsonErrorEnum = {}));
var Otcer400ApplicationJsonErrorDescriptionEnum;
(function (Otcer400ApplicationJsonErrorDescriptionEnum) {
    Otcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Otcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Otcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Otcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Otcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Otcer400ApplicationJsonErrorDescriptionEnum = exports.Otcer400ApplicationJsonErrorDescriptionEnum || (exports.Otcer400ApplicationJsonErrorDescriptionEnum = {}));
var Otcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer400ApplicationJson, _super);
    function Otcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Otcer400ApplicationJson = Otcer400ApplicationJson;
var Otcer401ApplicationJsonErrorEnum;
(function (Otcer401ApplicationJsonErrorEnum) {
    Otcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Otcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Otcer401ApplicationJsonErrorEnum = exports.Otcer401ApplicationJsonErrorEnum || (exports.Otcer401ApplicationJsonErrorEnum = {}));
var Otcer401ApplicationJsonErrorDescriptionEnum;
(function (Otcer401ApplicationJsonErrorDescriptionEnum) {
    Otcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Otcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Otcer401ApplicationJsonErrorDescriptionEnum = exports.Otcer401ApplicationJsonErrorDescriptionEnum || (exports.Otcer401ApplicationJsonErrorDescriptionEnum = {}));
var Otcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer401ApplicationJson, _super);
    function Otcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Otcer401ApplicationJson = Otcer401ApplicationJson;
var Otcer404ApplicationJsonErrorEnum;
(function (Otcer404ApplicationJsonErrorEnum) {
    Otcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Otcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Otcer404ApplicationJsonErrorEnum = exports.Otcer404ApplicationJsonErrorEnum || (exports.Otcer404ApplicationJsonErrorEnum = {}));
var Otcer404ApplicationJsonErrorDescriptionEnum;
(function (Otcer404ApplicationJsonErrorDescriptionEnum) {
    Otcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Otcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Otcer404ApplicationJsonErrorDescriptionEnum = exports.Otcer404ApplicationJsonErrorDescriptionEnum || (exports.Otcer404ApplicationJsonErrorDescriptionEnum = {}));
var Otcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer404ApplicationJson, _super);
    function Otcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Otcer404ApplicationJson = Otcer404ApplicationJson;
var Otcer500ApplicationJsonErrorEnum;
(function (Otcer500ApplicationJsonErrorEnum) {
    Otcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Otcer500ApplicationJsonErrorEnum = exports.Otcer500ApplicationJsonErrorEnum || (exports.Otcer500ApplicationJsonErrorEnum = {}));
var Otcer500ApplicationJsonErrorDescriptionEnum;
(function (Otcer500ApplicationJsonErrorDescriptionEnum) {
    Otcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Otcer500ApplicationJsonErrorDescriptionEnum = exports.Otcer500ApplicationJsonErrorDescriptionEnum || (exports.Otcer500ApplicationJsonErrorDescriptionEnum = {}));
var Otcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer500ApplicationJson, _super);
    function Otcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Otcer500ApplicationJson = Otcer500ApplicationJson;
var Otcer502ApplicationJsonErrorEnum;
(function (Otcer502ApplicationJsonErrorEnum) {
    Otcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Otcer502ApplicationJsonErrorEnum = exports.Otcer502ApplicationJsonErrorEnum || (exports.Otcer502ApplicationJsonErrorEnum = {}));
var Otcer502ApplicationJsonErrorDescriptionEnum;
(function (Otcer502ApplicationJsonErrorDescriptionEnum) {
    Otcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Otcer502ApplicationJsonErrorDescriptionEnum = exports.Otcer502ApplicationJsonErrorDescriptionEnum || (exports.Otcer502ApplicationJsonErrorDescriptionEnum = {}));
var Otcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer502ApplicationJson, _super);
    function Otcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Otcer502ApplicationJson = Otcer502ApplicationJson;
var Otcer503ApplicationJsonErrorEnum;
(function (Otcer503ApplicationJsonErrorEnum) {
    Otcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Otcer503ApplicationJsonErrorEnum = exports.Otcer503ApplicationJsonErrorEnum || (exports.Otcer503ApplicationJsonErrorEnum = {}));
var Otcer503ApplicationJsonErrorDescriptionEnum;
(function (Otcer503ApplicationJsonErrorDescriptionEnum) {
    Otcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Otcer503ApplicationJsonErrorDescriptionEnum = exports.Otcer503ApplicationJsonErrorDescriptionEnum || (exports.Otcer503ApplicationJsonErrorDescriptionEnum = {}));
var Otcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer503ApplicationJson, _super);
    function Otcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Otcer503ApplicationJson = Otcer503ApplicationJson;
var Otcer504ApplicationJsonErrorEnum;
(function (Otcer504ApplicationJsonErrorEnum) {
    Otcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Otcer504ApplicationJsonErrorEnum = exports.Otcer504ApplicationJsonErrorEnum || (exports.Otcer504ApplicationJsonErrorEnum = {}));
var Otcer504ApplicationJsonErrorDescriptionEnum;
(function (Otcer504ApplicationJsonErrorDescriptionEnum) {
    Otcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Otcer504ApplicationJsonErrorDescriptionEnum = exports.Otcer504ApplicationJsonErrorDescriptionEnum || (exports.Otcer504ApplicationJsonErrorDescriptionEnum = {}));
var Otcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Otcer504ApplicationJson, _super);
    function Otcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Otcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Otcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Otcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Otcer504ApplicationJson = Otcer504ApplicationJson;
var OtcerRequest = /** @class */ (function (_super) {
    __extends(OtcerRequest, _super);
    function OtcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", OtcerRequestBody)
    ], OtcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", OtcerSecurity)
    ], OtcerRequest.prototype, "security", void 0);
    return OtcerRequest;
}(utils_1.SpeakeasyBase));
exports.OtcerRequest = OtcerRequest;
var OtcerResponse = /** @class */ (function (_super) {
    __extends(OtcerResponse, _super);
    function OtcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], OtcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], OtcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Otcer400ApplicationJson)
    ], OtcerResponse.prototype, "otcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Otcer401ApplicationJson)
    ], OtcerResponse.prototype, "otcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Otcer404ApplicationJson)
    ], OtcerResponse.prototype, "otcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Otcer500ApplicationJson)
    ], OtcerResponse.prototype, "otcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Otcer502ApplicationJson)
    ], OtcerResponse.prototype, "otcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Otcer503ApplicationJson)
    ], OtcerResponse.prototype, "otcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Otcer504ApplicationJson)
    ], OtcerResponse.prototype, "otcer504ApplicationJSONObject", void 0);
    return OtcerResponse;
}(utils_1.SpeakeasyBase));
exports.OtcerResponse = OtcerResponse;
