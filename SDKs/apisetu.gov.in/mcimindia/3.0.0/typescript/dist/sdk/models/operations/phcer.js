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
exports.PhcerResponse = exports.PhcerRequest = exports.Phcer504ApplicationJson = exports.Phcer504ApplicationJsonErrorDescriptionEnum = exports.Phcer504ApplicationJsonErrorEnum = exports.Phcer503ApplicationJson = exports.Phcer503ApplicationJsonErrorDescriptionEnum = exports.Phcer503ApplicationJsonErrorEnum = exports.Phcer502ApplicationJson = exports.Phcer502ApplicationJsonErrorDescriptionEnum = exports.Phcer502ApplicationJsonErrorEnum = exports.Phcer500ApplicationJson = exports.Phcer500ApplicationJsonErrorDescriptionEnum = exports.Phcer500ApplicationJsonErrorEnum = exports.Phcer404ApplicationJson = exports.Phcer404ApplicationJsonErrorDescriptionEnum = exports.Phcer404ApplicationJsonErrorEnum = exports.Phcer401ApplicationJson = exports.Phcer401ApplicationJsonErrorDescriptionEnum = exports.Phcer401ApplicationJsonErrorEnum = exports.Phcer400ApplicationJson = exports.Phcer400ApplicationJsonErrorDescriptionEnum = exports.Phcer400ApplicationJsonErrorEnum = exports.PhcerSecurity = exports.PhcerRequestBody = exports.PhcerRequestBodyFormatEnum = exports.PhcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PhcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PhcerRequestBodyCertificateParameters, _super);
    function PhcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], PhcerRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PhcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=REGN_NO" }),
        __metadata("design:type", String)
    ], PhcerRequestBodyCertificateParameters.prototype, "regnNO", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], PhcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return PhcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PhcerRequestBodyCertificateParameters = PhcerRequestBodyCertificateParameters;
var PhcerRequestBodyFormatEnum;
(function (PhcerRequestBodyFormatEnum) {
    PhcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(PhcerRequestBodyFormatEnum = exports.PhcerRequestBodyFormatEnum || (exports.PhcerRequestBodyFormatEnum = {}));
var PhcerRequestBody = /** @class */ (function (_super) {
    __extends(PhcerRequestBody, _super);
    function PhcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PhcerRequestBodyCertificateParameters)
    ], PhcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PhcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PhcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PhcerRequestBody.prototype, "txnId", void 0);
    return PhcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.PhcerRequestBody = PhcerRequestBody;
var PhcerSecurity = /** @class */ (function (_super) {
    __extends(PhcerSecurity, _super);
    function PhcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PhcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PhcerSecurity.prototype, "clientId", void 0);
    return PhcerSecurity;
}(utils_1.SpeakeasyBase));
exports.PhcerSecurity = PhcerSecurity;
var Phcer400ApplicationJsonErrorEnum;
(function (Phcer400ApplicationJsonErrorEnum) {
    Phcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Phcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Phcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Phcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Phcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Phcer400ApplicationJsonErrorEnum = exports.Phcer400ApplicationJsonErrorEnum || (exports.Phcer400ApplicationJsonErrorEnum = {}));
var Phcer400ApplicationJsonErrorDescriptionEnum;
(function (Phcer400ApplicationJsonErrorDescriptionEnum) {
    Phcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Phcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Phcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Phcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Phcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Phcer400ApplicationJsonErrorDescriptionEnum = exports.Phcer400ApplicationJsonErrorDescriptionEnum || (exports.Phcer400ApplicationJsonErrorDescriptionEnum = {}));
var Phcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer400ApplicationJson, _super);
    function Phcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Phcer400ApplicationJson = Phcer400ApplicationJson;
var Phcer401ApplicationJsonErrorEnum;
(function (Phcer401ApplicationJsonErrorEnum) {
    Phcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Phcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Phcer401ApplicationJsonErrorEnum = exports.Phcer401ApplicationJsonErrorEnum || (exports.Phcer401ApplicationJsonErrorEnum = {}));
var Phcer401ApplicationJsonErrorDescriptionEnum;
(function (Phcer401ApplicationJsonErrorDescriptionEnum) {
    Phcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Phcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Phcer401ApplicationJsonErrorDescriptionEnum = exports.Phcer401ApplicationJsonErrorDescriptionEnum || (exports.Phcer401ApplicationJsonErrorDescriptionEnum = {}));
var Phcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer401ApplicationJson, _super);
    function Phcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Phcer401ApplicationJson = Phcer401ApplicationJson;
var Phcer404ApplicationJsonErrorEnum;
(function (Phcer404ApplicationJsonErrorEnum) {
    Phcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Phcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Phcer404ApplicationJsonErrorEnum = exports.Phcer404ApplicationJsonErrorEnum || (exports.Phcer404ApplicationJsonErrorEnum = {}));
var Phcer404ApplicationJsonErrorDescriptionEnum;
(function (Phcer404ApplicationJsonErrorDescriptionEnum) {
    Phcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Phcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Phcer404ApplicationJsonErrorDescriptionEnum = exports.Phcer404ApplicationJsonErrorDescriptionEnum || (exports.Phcer404ApplicationJsonErrorDescriptionEnum = {}));
var Phcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer404ApplicationJson, _super);
    function Phcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Phcer404ApplicationJson = Phcer404ApplicationJson;
var Phcer500ApplicationJsonErrorEnum;
(function (Phcer500ApplicationJsonErrorEnum) {
    Phcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Phcer500ApplicationJsonErrorEnum = exports.Phcer500ApplicationJsonErrorEnum || (exports.Phcer500ApplicationJsonErrorEnum = {}));
var Phcer500ApplicationJsonErrorDescriptionEnum;
(function (Phcer500ApplicationJsonErrorDescriptionEnum) {
    Phcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Phcer500ApplicationJsonErrorDescriptionEnum = exports.Phcer500ApplicationJsonErrorDescriptionEnum || (exports.Phcer500ApplicationJsonErrorDescriptionEnum = {}));
var Phcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer500ApplicationJson, _super);
    function Phcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Phcer500ApplicationJson = Phcer500ApplicationJson;
var Phcer502ApplicationJsonErrorEnum;
(function (Phcer502ApplicationJsonErrorEnum) {
    Phcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Phcer502ApplicationJsonErrorEnum = exports.Phcer502ApplicationJsonErrorEnum || (exports.Phcer502ApplicationJsonErrorEnum = {}));
var Phcer502ApplicationJsonErrorDescriptionEnum;
(function (Phcer502ApplicationJsonErrorDescriptionEnum) {
    Phcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Phcer502ApplicationJsonErrorDescriptionEnum = exports.Phcer502ApplicationJsonErrorDescriptionEnum || (exports.Phcer502ApplicationJsonErrorDescriptionEnum = {}));
var Phcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer502ApplicationJson, _super);
    function Phcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Phcer502ApplicationJson = Phcer502ApplicationJson;
var Phcer503ApplicationJsonErrorEnum;
(function (Phcer503ApplicationJsonErrorEnum) {
    Phcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Phcer503ApplicationJsonErrorEnum = exports.Phcer503ApplicationJsonErrorEnum || (exports.Phcer503ApplicationJsonErrorEnum = {}));
var Phcer503ApplicationJsonErrorDescriptionEnum;
(function (Phcer503ApplicationJsonErrorDescriptionEnum) {
    Phcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Phcer503ApplicationJsonErrorDescriptionEnum = exports.Phcer503ApplicationJsonErrorDescriptionEnum || (exports.Phcer503ApplicationJsonErrorDescriptionEnum = {}));
var Phcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer503ApplicationJson, _super);
    function Phcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Phcer503ApplicationJson = Phcer503ApplicationJson;
var Phcer504ApplicationJsonErrorEnum;
(function (Phcer504ApplicationJsonErrorEnum) {
    Phcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Phcer504ApplicationJsonErrorEnum = exports.Phcer504ApplicationJsonErrorEnum || (exports.Phcer504ApplicationJsonErrorEnum = {}));
var Phcer504ApplicationJsonErrorDescriptionEnum;
(function (Phcer504ApplicationJsonErrorDescriptionEnum) {
    Phcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Phcer504ApplicationJsonErrorDescriptionEnum = exports.Phcer504ApplicationJsonErrorDescriptionEnum || (exports.Phcer504ApplicationJsonErrorDescriptionEnum = {}));
var Phcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Phcer504ApplicationJson, _super);
    function Phcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Phcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Phcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Phcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Phcer504ApplicationJson = Phcer504ApplicationJson;
var PhcerRequest = /** @class */ (function (_super) {
    __extends(PhcerRequest, _super);
    function PhcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PhcerRequestBody)
    ], PhcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PhcerSecurity)
    ], PhcerRequest.prototype, "security", void 0);
    return PhcerRequest;
}(utils_1.SpeakeasyBase));
exports.PhcerRequest = PhcerRequest;
var PhcerResponse = /** @class */ (function (_super) {
    __extends(PhcerResponse, _super);
    function PhcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PhcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PhcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Phcer400ApplicationJson)
    ], PhcerResponse.prototype, "phcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Phcer401ApplicationJson)
    ], PhcerResponse.prototype, "phcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Phcer404ApplicationJson)
    ], PhcerResponse.prototype, "phcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Phcer500ApplicationJson)
    ], PhcerResponse.prototype, "phcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Phcer502ApplicationJson)
    ], PhcerResponse.prototype, "phcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Phcer503ApplicationJson)
    ], PhcerResponse.prototype, "phcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Phcer504ApplicationJson)
    ], PhcerResponse.prototype, "phcer504ApplicationJSONObject", void 0);
    return PhcerResponse;
}(utils_1.SpeakeasyBase));
exports.PhcerResponse = PhcerResponse;
