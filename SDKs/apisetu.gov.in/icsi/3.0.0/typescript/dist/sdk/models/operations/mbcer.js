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
exports.MbcerResponse = exports.MbcerRequest = exports.Mbcer504ApplicationJson = exports.Mbcer504ApplicationJsonErrorDescriptionEnum = exports.Mbcer504ApplicationJsonErrorEnum = exports.Mbcer503ApplicationJson = exports.Mbcer503ApplicationJsonErrorDescriptionEnum = exports.Mbcer503ApplicationJsonErrorEnum = exports.Mbcer502ApplicationJson = exports.Mbcer502ApplicationJsonErrorDescriptionEnum = exports.Mbcer502ApplicationJsonErrorEnum = exports.Mbcer500ApplicationJson = exports.Mbcer500ApplicationJsonErrorDescriptionEnum = exports.Mbcer500ApplicationJsonErrorEnum = exports.Mbcer404ApplicationJson = exports.Mbcer404ApplicationJsonErrorDescriptionEnum = exports.Mbcer404ApplicationJsonErrorEnum = exports.Mbcer401ApplicationJson = exports.Mbcer401ApplicationJsonErrorDescriptionEnum = exports.Mbcer401ApplicationJsonErrorEnum = exports.Mbcer400ApplicationJson = exports.Mbcer400ApplicationJsonErrorDescriptionEnum = exports.Mbcer400ApplicationJsonErrorEnum = exports.MbcerSecurity = exports.MbcerRequestBody = exports.MbcerRequestBodyFormatEnum = exports.MbcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MbcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MbcerRequestBodyCertificateParameters, _super);
    function MbcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CertType" }),
        __metadata("design:type", String)
    ], MbcerRequestBodyCertificateParameters.prototype, "certType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], MbcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Membership_No" }),
        __metadata("design:type", String)
    ], MbcerRequestBodyCertificateParameters.prototype, "membershipNo", void 0);
    return MbcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MbcerRequestBodyCertificateParameters = MbcerRequestBodyCertificateParameters;
var MbcerRequestBodyFormatEnum;
(function (MbcerRequestBodyFormatEnum) {
    MbcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(MbcerRequestBodyFormatEnum = exports.MbcerRequestBodyFormatEnum || (exports.MbcerRequestBodyFormatEnum = {}));
var MbcerRequestBody = /** @class */ (function (_super) {
    __extends(MbcerRequestBody, _super);
    function MbcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MbcerRequestBodyCertificateParameters)
    ], MbcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MbcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MbcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MbcerRequestBody.prototype, "txnId", void 0);
    return MbcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.MbcerRequestBody = MbcerRequestBody;
var MbcerSecurity = /** @class */ (function (_super) {
    __extends(MbcerSecurity, _super);
    function MbcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MbcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MbcerSecurity.prototype, "clientId", void 0);
    return MbcerSecurity;
}(utils_1.SpeakeasyBase));
exports.MbcerSecurity = MbcerSecurity;
var Mbcer400ApplicationJsonErrorEnum;
(function (Mbcer400ApplicationJsonErrorEnum) {
    Mbcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mbcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mbcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mbcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mbcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mbcer400ApplicationJsonErrorEnum = exports.Mbcer400ApplicationJsonErrorEnum || (exports.Mbcer400ApplicationJsonErrorEnum = {}));
var Mbcer400ApplicationJsonErrorDescriptionEnum;
(function (Mbcer400ApplicationJsonErrorDescriptionEnum) {
    Mbcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mbcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mbcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mbcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mbcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mbcer400ApplicationJsonErrorDescriptionEnum = exports.Mbcer400ApplicationJsonErrorDescriptionEnum || (exports.Mbcer400ApplicationJsonErrorDescriptionEnum = {}));
var Mbcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mbcer400ApplicationJson, _super);
    function Mbcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mbcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mbcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Mbcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mbcer400ApplicationJson = Mbcer400ApplicationJson;
var Mbcer401ApplicationJsonErrorEnum;
(function (Mbcer401ApplicationJsonErrorEnum) {
    Mbcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mbcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mbcer401ApplicationJsonErrorEnum = exports.Mbcer401ApplicationJsonErrorEnum || (exports.Mbcer401ApplicationJsonErrorEnum = {}));
var Mbcer401ApplicationJsonErrorDescriptionEnum;
(function (Mbcer401ApplicationJsonErrorDescriptionEnum) {
    Mbcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mbcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mbcer401ApplicationJsonErrorDescriptionEnum = exports.Mbcer401ApplicationJsonErrorDescriptionEnum || (exports.Mbcer401ApplicationJsonErrorDescriptionEnum = {}));
var Mbcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mbcer401ApplicationJson, _super);
    function Mbcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mbcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mbcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Mbcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mbcer401ApplicationJson = Mbcer401ApplicationJson;
var Mbcer404ApplicationJsonErrorEnum;
(function (Mbcer404ApplicationJsonErrorEnum) {
    Mbcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mbcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mbcer404ApplicationJsonErrorEnum = exports.Mbcer404ApplicationJsonErrorEnum || (exports.Mbcer404ApplicationJsonErrorEnum = {}));
var Mbcer404ApplicationJsonErrorDescriptionEnum;
(function (Mbcer404ApplicationJsonErrorDescriptionEnum) {
    Mbcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mbcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mbcer404ApplicationJsonErrorDescriptionEnum = exports.Mbcer404ApplicationJsonErrorDescriptionEnum || (exports.Mbcer404ApplicationJsonErrorDescriptionEnum = {}));
var Mbcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mbcer404ApplicationJson, _super);
    function Mbcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mbcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mbcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Mbcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mbcer404ApplicationJson = Mbcer404ApplicationJson;
var Mbcer500ApplicationJsonErrorEnum;
(function (Mbcer500ApplicationJsonErrorEnum) {
    Mbcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mbcer500ApplicationJsonErrorEnum = exports.Mbcer500ApplicationJsonErrorEnum || (exports.Mbcer500ApplicationJsonErrorEnum = {}));
var Mbcer500ApplicationJsonErrorDescriptionEnum;
(function (Mbcer500ApplicationJsonErrorDescriptionEnum) {
    Mbcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mbcer500ApplicationJsonErrorDescriptionEnum = exports.Mbcer500ApplicationJsonErrorDescriptionEnum || (exports.Mbcer500ApplicationJsonErrorDescriptionEnum = {}));
var Mbcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mbcer500ApplicationJson, _super);
    function Mbcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mbcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mbcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Mbcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mbcer500ApplicationJson = Mbcer500ApplicationJson;
var Mbcer502ApplicationJsonErrorEnum;
(function (Mbcer502ApplicationJsonErrorEnum) {
    Mbcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mbcer502ApplicationJsonErrorEnum = exports.Mbcer502ApplicationJsonErrorEnum || (exports.Mbcer502ApplicationJsonErrorEnum = {}));
var Mbcer502ApplicationJsonErrorDescriptionEnum;
(function (Mbcer502ApplicationJsonErrorDescriptionEnum) {
    Mbcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mbcer502ApplicationJsonErrorDescriptionEnum = exports.Mbcer502ApplicationJsonErrorDescriptionEnum || (exports.Mbcer502ApplicationJsonErrorDescriptionEnum = {}));
var Mbcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mbcer502ApplicationJson, _super);
    function Mbcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mbcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mbcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Mbcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mbcer502ApplicationJson = Mbcer502ApplicationJson;
var Mbcer503ApplicationJsonErrorEnum;
(function (Mbcer503ApplicationJsonErrorEnum) {
    Mbcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mbcer503ApplicationJsonErrorEnum = exports.Mbcer503ApplicationJsonErrorEnum || (exports.Mbcer503ApplicationJsonErrorEnum = {}));
var Mbcer503ApplicationJsonErrorDescriptionEnum;
(function (Mbcer503ApplicationJsonErrorDescriptionEnum) {
    Mbcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mbcer503ApplicationJsonErrorDescriptionEnum = exports.Mbcer503ApplicationJsonErrorDescriptionEnum || (exports.Mbcer503ApplicationJsonErrorDescriptionEnum = {}));
var Mbcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mbcer503ApplicationJson, _super);
    function Mbcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mbcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mbcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Mbcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mbcer503ApplicationJson = Mbcer503ApplicationJson;
var Mbcer504ApplicationJsonErrorEnum;
(function (Mbcer504ApplicationJsonErrorEnum) {
    Mbcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mbcer504ApplicationJsonErrorEnum = exports.Mbcer504ApplicationJsonErrorEnum || (exports.Mbcer504ApplicationJsonErrorEnum = {}));
var Mbcer504ApplicationJsonErrorDescriptionEnum;
(function (Mbcer504ApplicationJsonErrorDescriptionEnum) {
    Mbcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mbcer504ApplicationJsonErrorDescriptionEnum = exports.Mbcer504ApplicationJsonErrorDescriptionEnum || (exports.Mbcer504ApplicationJsonErrorDescriptionEnum = {}));
var Mbcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mbcer504ApplicationJson, _super);
    function Mbcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mbcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mbcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Mbcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mbcer504ApplicationJson = Mbcer504ApplicationJson;
var MbcerRequest = /** @class */ (function (_super) {
    __extends(MbcerRequest, _super);
    function MbcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MbcerRequestBody)
    ], MbcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MbcerSecurity)
    ], MbcerRequest.prototype, "security", void 0);
    return MbcerRequest;
}(utils_1.SpeakeasyBase));
exports.MbcerRequest = MbcerRequest;
var MbcerResponse = /** @class */ (function (_super) {
    __extends(MbcerResponse, _super);
    function MbcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MbcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MbcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mbcer400ApplicationJson)
    ], MbcerResponse.prototype, "mbcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mbcer401ApplicationJson)
    ], MbcerResponse.prototype, "mbcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mbcer404ApplicationJson)
    ], MbcerResponse.prototype, "mbcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mbcer500ApplicationJson)
    ], MbcerResponse.prototype, "mbcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mbcer502ApplicationJson)
    ], MbcerResponse.prototype, "mbcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mbcer503ApplicationJson)
    ], MbcerResponse.prototype, "mbcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mbcer504ApplicationJson)
    ], MbcerResponse.prototype, "mbcer504ApplicationJSONObject", void 0);
    return MbcerResponse;
}(utils_1.SpeakeasyBase));
exports.MbcerResponse = MbcerResponse;
