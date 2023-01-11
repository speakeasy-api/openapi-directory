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
exports.FmcerResponse = exports.FmcerRequest = exports.Fmcer504ApplicationJson = exports.Fmcer504ApplicationJsonErrorDescriptionEnum = exports.Fmcer504ApplicationJsonErrorEnum = exports.Fmcer503ApplicationJson = exports.Fmcer503ApplicationJsonErrorDescriptionEnum = exports.Fmcer503ApplicationJsonErrorEnum = exports.Fmcer502ApplicationJson = exports.Fmcer502ApplicationJsonErrorDescriptionEnum = exports.Fmcer502ApplicationJsonErrorEnum = exports.Fmcer500ApplicationJson = exports.Fmcer500ApplicationJsonErrorDescriptionEnum = exports.Fmcer500ApplicationJsonErrorEnum = exports.Fmcer404ApplicationJson = exports.Fmcer404ApplicationJsonErrorDescriptionEnum = exports.Fmcer404ApplicationJsonErrorEnum = exports.Fmcer401ApplicationJson = exports.Fmcer401ApplicationJsonErrorDescriptionEnum = exports.Fmcer401ApplicationJsonErrorEnum = exports.Fmcer400ApplicationJson = exports.Fmcer400ApplicationJsonErrorDescriptionEnum = exports.Fmcer400ApplicationJsonErrorEnum = exports.FmcerSecurity = exports.FmcerRequestBody = exports.FmcerRequestBodyFormatEnum = exports.FmcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FmcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(FmcerRequestBodyCertificateParameters, _super);
    function FmcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CertificateNumber" }),
        __metadata("design:type", String)
    ], FmcerRequestBodyCertificateParameters.prototype, "certificateNumber", void 0);
    return FmcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.FmcerRequestBodyCertificateParameters = FmcerRequestBodyCertificateParameters;
var FmcerRequestBodyFormatEnum;
(function (FmcerRequestBodyFormatEnum) {
    FmcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(FmcerRequestBodyFormatEnum = exports.FmcerRequestBodyFormatEnum || (exports.FmcerRequestBodyFormatEnum = {}));
var FmcerRequestBody = /** @class */ (function (_super) {
    __extends(FmcerRequestBody, _super);
    function FmcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", FmcerRequestBodyCertificateParameters)
    ], FmcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], FmcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], FmcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], FmcerRequestBody.prototype, "txnId", void 0);
    return FmcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.FmcerRequestBody = FmcerRequestBody;
var FmcerSecurity = /** @class */ (function (_super) {
    __extends(FmcerSecurity, _super);
    function FmcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FmcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], FmcerSecurity.prototype, "clientId", void 0);
    return FmcerSecurity;
}(utils_1.SpeakeasyBase));
exports.FmcerSecurity = FmcerSecurity;
var Fmcer400ApplicationJsonErrorEnum;
(function (Fmcer400ApplicationJsonErrorEnum) {
    Fmcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Fmcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Fmcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Fmcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Fmcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Fmcer400ApplicationJsonErrorEnum = exports.Fmcer400ApplicationJsonErrorEnum || (exports.Fmcer400ApplicationJsonErrorEnum = {}));
var Fmcer400ApplicationJsonErrorDescriptionEnum;
(function (Fmcer400ApplicationJsonErrorDescriptionEnum) {
    Fmcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Fmcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Fmcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Fmcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Fmcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Fmcer400ApplicationJsonErrorDescriptionEnum = exports.Fmcer400ApplicationJsonErrorDescriptionEnum || (exports.Fmcer400ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer400ApplicationJson, _super);
    function Fmcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fmcer400ApplicationJson = Fmcer400ApplicationJson;
var Fmcer401ApplicationJsonErrorEnum;
(function (Fmcer401ApplicationJsonErrorEnum) {
    Fmcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Fmcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Fmcer401ApplicationJsonErrorEnum = exports.Fmcer401ApplicationJsonErrorEnum || (exports.Fmcer401ApplicationJsonErrorEnum = {}));
var Fmcer401ApplicationJsonErrorDescriptionEnum;
(function (Fmcer401ApplicationJsonErrorDescriptionEnum) {
    Fmcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Fmcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Fmcer401ApplicationJsonErrorDescriptionEnum = exports.Fmcer401ApplicationJsonErrorDescriptionEnum || (exports.Fmcer401ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer401ApplicationJson, _super);
    function Fmcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fmcer401ApplicationJson = Fmcer401ApplicationJson;
var Fmcer404ApplicationJsonErrorEnum;
(function (Fmcer404ApplicationJsonErrorEnum) {
    Fmcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Fmcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Fmcer404ApplicationJsonErrorEnum = exports.Fmcer404ApplicationJsonErrorEnum || (exports.Fmcer404ApplicationJsonErrorEnum = {}));
var Fmcer404ApplicationJsonErrorDescriptionEnum;
(function (Fmcer404ApplicationJsonErrorDescriptionEnum) {
    Fmcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Fmcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Fmcer404ApplicationJsonErrorDescriptionEnum = exports.Fmcer404ApplicationJsonErrorDescriptionEnum || (exports.Fmcer404ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer404ApplicationJson, _super);
    function Fmcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fmcer404ApplicationJson = Fmcer404ApplicationJson;
var Fmcer500ApplicationJsonErrorEnum;
(function (Fmcer500ApplicationJsonErrorEnum) {
    Fmcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Fmcer500ApplicationJsonErrorEnum = exports.Fmcer500ApplicationJsonErrorEnum || (exports.Fmcer500ApplicationJsonErrorEnum = {}));
var Fmcer500ApplicationJsonErrorDescriptionEnum;
(function (Fmcer500ApplicationJsonErrorDescriptionEnum) {
    Fmcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Fmcer500ApplicationJsonErrorDescriptionEnum = exports.Fmcer500ApplicationJsonErrorDescriptionEnum || (exports.Fmcer500ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer500ApplicationJson, _super);
    function Fmcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fmcer500ApplicationJson = Fmcer500ApplicationJson;
var Fmcer502ApplicationJsonErrorEnum;
(function (Fmcer502ApplicationJsonErrorEnum) {
    Fmcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Fmcer502ApplicationJsonErrorEnum = exports.Fmcer502ApplicationJsonErrorEnum || (exports.Fmcer502ApplicationJsonErrorEnum = {}));
var Fmcer502ApplicationJsonErrorDescriptionEnum;
(function (Fmcer502ApplicationJsonErrorDescriptionEnum) {
    Fmcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Fmcer502ApplicationJsonErrorDescriptionEnum = exports.Fmcer502ApplicationJsonErrorDescriptionEnum || (exports.Fmcer502ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer502ApplicationJson, _super);
    function Fmcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fmcer502ApplicationJson = Fmcer502ApplicationJson;
var Fmcer503ApplicationJsonErrorEnum;
(function (Fmcer503ApplicationJsonErrorEnum) {
    Fmcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Fmcer503ApplicationJsonErrorEnum = exports.Fmcer503ApplicationJsonErrorEnum || (exports.Fmcer503ApplicationJsonErrorEnum = {}));
var Fmcer503ApplicationJsonErrorDescriptionEnum;
(function (Fmcer503ApplicationJsonErrorDescriptionEnum) {
    Fmcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Fmcer503ApplicationJsonErrorDescriptionEnum = exports.Fmcer503ApplicationJsonErrorDescriptionEnum || (exports.Fmcer503ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer503ApplicationJson, _super);
    function Fmcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fmcer503ApplicationJson = Fmcer503ApplicationJson;
var Fmcer504ApplicationJsonErrorEnum;
(function (Fmcer504ApplicationJsonErrorEnum) {
    Fmcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Fmcer504ApplicationJsonErrorEnum = exports.Fmcer504ApplicationJsonErrorEnum || (exports.Fmcer504ApplicationJsonErrorEnum = {}));
var Fmcer504ApplicationJsonErrorDescriptionEnum;
(function (Fmcer504ApplicationJsonErrorDescriptionEnum) {
    Fmcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Fmcer504ApplicationJsonErrorDescriptionEnum = exports.Fmcer504ApplicationJsonErrorDescriptionEnum || (exports.Fmcer504ApplicationJsonErrorDescriptionEnum = {}));
var Fmcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Fmcer504ApplicationJson, _super);
    function Fmcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fmcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fmcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Fmcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fmcer504ApplicationJson = Fmcer504ApplicationJson;
var FmcerRequest = /** @class */ (function (_super) {
    __extends(FmcerRequest, _super);
    function FmcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", FmcerRequestBody)
    ], FmcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FmcerSecurity)
    ], FmcerRequest.prototype, "security", void 0);
    return FmcerRequest;
}(utils_1.SpeakeasyBase));
exports.FmcerRequest = FmcerRequest;
var FmcerResponse = /** @class */ (function (_super) {
    __extends(FmcerResponse, _super);
    function FmcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FmcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FmcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fmcer400ApplicationJson)
    ], FmcerResponse.prototype, "fmcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fmcer401ApplicationJson)
    ], FmcerResponse.prototype, "fmcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fmcer404ApplicationJson)
    ], FmcerResponse.prototype, "fmcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fmcer500ApplicationJson)
    ], FmcerResponse.prototype, "fmcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fmcer502ApplicationJson)
    ], FmcerResponse.prototype, "fmcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fmcer503ApplicationJson)
    ], FmcerResponse.prototype, "fmcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fmcer504ApplicationJson)
    ], FmcerResponse.prototype, "fmcer504ApplicationJSONObject", void 0);
    return FmcerResponse;
}(utils_1.SpeakeasyBase));
exports.FmcerResponse = FmcerResponse;
