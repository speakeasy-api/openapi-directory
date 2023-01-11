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
exports.NtcerResponse = exports.NtcerRequest = exports.Ntcer504ApplicationJson = exports.Ntcer504ApplicationJsonErrorDescriptionEnum = exports.Ntcer504ApplicationJsonErrorEnum = exports.Ntcer503ApplicationJson = exports.Ntcer503ApplicationJsonErrorDescriptionEnum = exports.Ntcer503ApplicationJsonErrorEnum = exports.Ntcer502ApplicationJson = exports.Ntcer502ApplicationJsonErrorDescriptionEnum = exports.Ntcer502ApplicationJsonErrorEnum = exports.Ntcer500ApplicationJson = exports.Ntcer500ApplicationJsonErrorDescriptionEnum = exports.Ntcer500ApplicationJsonErrorEnum = exports.Ntcer404ApplicationJson = exports.Ntcer404ApplicationJsonErrorDescriptionEnum = exports.Ntcer404ApplicationJsonErrorEnum = exports.Ntcer401ApplicationJson = exports.Ntcer401ApplicationJsonErrorDescriptionEnum = exports.Ntcer401ApplicationJsonErrorEnum = exports.Ntcer400ApplicationJson = exports.Ntcer400ApplicationJsonErrorDescriptionEnum = exports.Ntcer400ApplicationJsonErrorEnum = exports.NtcerSecurity = exports.NtcerRequestBody = exports.NtcerRequestBodyFormatEnum = exports.NtcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NtcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NtcerRequestBodyCertificateParameters, _super);
    function NtcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], NtcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], NtcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], NtcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return NtcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.NtcerRequestBodyCertificateParameters = NtcerRequestBodyCertificateParameters;
var NtcerRequestBodyFormatEnum;
(function (NtcerRequestBodyFormatEnum) {
    NtcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(NtcerRequestBodyFormatEnum = exports.NtcerRequestBodyFormatEnum || (exports.NtcerRequestBodyFormatEnum = {}));
var NtcerRequestBody = /** @class */ (function (_super) {
    __extends(NtcerRequestBody, _super);
    function NtcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NtcerRequestBodyCertificateParameters)
    ], NtcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NtcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NtcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NtcerRequestBody.prototype, "txnId", void 0);
    return NtcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.NtcerRequestBody = NtcerRequestBody;
var NtcerSecurity = /** @class */ (function (_super) {
    __extends(NtcerSecurity, _super);
    function NtcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NtcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NtcerSecurity.prototype, "clientId", void 0);
    return NtcerSecurity;
}(utils_1.SpeakeasyBase));
exports.NtcerSecurity = NtcerSecurity;
var Ntcer400ApplicationJsonErrorEnum;
(function (Ntcer400ApplicationJsonErrorEnum) {
    Ntcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ntcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ntcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ntcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ntcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ntcer400ApplicationJsonErrorEnum = exports.Ntcer400ApplicationJsonErrorEnum || (exports.Ntcer400ApplicationJsonErrorEnum = {}));
var Ntcer400ApplicationJsonErrorDescriptionEnum;
(function (Ntcer400ApplicationJsonErrorDescriptionEnum) {
    Ntcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ntcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ntcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ntcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ntcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ntcer400ApplicationJsonErrorDescriptionEnum = exports.Ntcer400ApplicationJsonErrorDescriptionEnum || (exports.Ntcer400ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer400ApplicationJson, _super);
    function Ntcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntcer400ApplicationJson = Ntcer400ApplicationJson;
var Ntcer401ApplicationJsonErrorEnum;
(function (Ntcer401ApplicationJsonErrorEnum) {
    Ntcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ntcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ntcer401ApplicationJsonErrorEnum = exports.Ntcer401ApplicationJsonErrorEnum || (exports.Ntcer401ApplicationJsonErrorEnum = {}));
var Ntcer401ApplicationJsonErrorDescriptionEnum;
(function (Ntcer401ApplicationJsonErrorDescriptionEnum) {
    Ntcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ntcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ntcer401ApplicationJsonErrorDescriptionEnum = exports.Ntcer401ApplicationJsonErrorDescriptionEnum || (exports.Ntcer401ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer401ApplicationJson, _super);
    function Ntcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntcer401ApplicationJson = Ntcer401ApplicationJson;
var Ntcer404ApplicationJsonErrorEnum;
(function (Ntcer404ApplicationJsonErrorEnum) {
    Ntcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ntcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ntcer404ApplicationJsonErrorEnum = exports.Ntcer404ApplicationJsonErrorEnum || (exports.Ntcer404ApplicationJsonErrorEnum = {}));
var Ntcer404ApplicationJsonErrorDescriptionEnum;
(function (Ntcer404ApplicationJsonErrorDescriptionEnum) {
    Ntcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ntcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ntcer404ApplicationJsonErrorDescriptionEnum = exports.Ntcer404ApplicationJsonErrorDescriptionEnum || (exports.Ntcer404ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer404ApplicationJson, _super);
    function Ntcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntcer404ApplicationJson = Ntcer404ApplicationJson;
var Ntcer500ApplicationJsonErrorEnum;
(function (Ntcer500ApplicationJsonErrorEnum) {
    Ntcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ntcer500ApplicationJsonErrorEnum = exports.Ntcer500ApplicationJsonErrorEnum || (exports.Ntcer500ApplicationJsonErrorEnum = {}));
var Ntcer500ApplicationJsonErrorDescriptionEnum;
(function (Ntcer500ApplicationJsonErrorDescriptionEnum) {
    Ntcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ntcer500ApplicationJsonErrorDescriptionEnum = exports.Ntcer500ApplicationJsonErrorDescriptionEnum || (exports.Ntcer500ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer500ApplicationJson, _super);
    function Ntcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntcer500ApplicationJson = Ntcer500ApplicationJson;
var Ntcer502ApplicationJsonErrorEnum;
(function (Ntcer502ApplicationJsonErrorEnum) {
    Ntcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ntcer502ApplicationJsonErrorEnum = exports.Ntcer502ApplicationJsonErrorEnum || (exports.Ntcer502ApplicationJsonErrorEnum = {}));
var Ntcer502ApplicationJsonErrorDescriptionEnum;
(function (Ntcer502ApplicationJsonErrorDescriptionEnum) {
    Ntcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ntcer502ApplicationJsonErrorDescriptionEnum = exports.Ntcer502ApplicationJsonErrorDescriptionEnum || (exports.Ntcer502ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer502ApplicationJson, _super);
    function Ntcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntcer502ApplicationJson = Ntcer502ApplicationJson;
var Ntcer503ApplicationJsonErrorEnum;
(function (Ntcer503ApplicationJsonErrorEnum) {
    Ntcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ntcer503ApplicationJsonErrorEnum = exports.Ntcer503ApplicationJsonErrorEnum || (exports.Ntcer503ApplicationJsonErrorEnum = {}));
var Ntcer503ApplicationJsonErrorDescriptionEnum;
(function (Ntcer503ApplicationJsonErrorDescriptionEnum) {
    Ntcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ntcer503ApplicationJsonErrorDescriptionEnum = exports.Ntcer503ApplicationJsonErrorDescriptionEnum || (exports.Ntcer503ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer503ApplicationJson, _super);
    function Ntcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntcer503ApplicationJson = Ntcer503ApplicationJson;
var Ntcer504ApplicationJsonErrorEnum;
(function (Ntcer504ApplicationJsonErrorEnum) {
    Ntcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ntcer504ApplicationJsonErrorEnum = exports.Ntcer504ApplicationJsonErrorEnum || (exports.Ntcer504ApplicationJsonErrorEnum = {}));
var Ntcer504ApplicationJsonErrorDescriptionEnum;
(function (Ntcer504ApplicationJsonErrorDescriptionEnum) {
    Ntcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ntcer504ApplicationJsonErrorDescriptionEnum = exports.Ntcer504ApplicationJsonErrorDescriptionEnum || (exports.Ntcer504ApplicationJsonErrorDescriptionEnum = {}));
var Ntcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntcer504ApplicationJson, _super);
    function Ntcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Ntcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntcer504ApplicationJson = Ntcer504ApplicationJson;
var NtcerRequest = /** @class */ (function (_super) {
    __extends(NtcerRequest, _super);
    function NtcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NtcerRequestBody)
    ], NtcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NtcerSecurity)
    ], NtcerRequest.prototype, "security", void 0);
    return NtcerRequest;
}(utils_1.SpeakeasyBase));
exports.NtcerRequest = NtcerRequest;
var NtcerResponse = /** @class */ (function (_super) {
    __extends(NtcerResponse, _super);
    function NtcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NtcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NtcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntcer400ApplicationJson)
    ], NtcerResponse.prototype, "ntcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntcer401ApplicationJson)
    ], NtcerResponse.prototype, "ntcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntcer404ApplicationJson)
    ], NtcerResponse.prototype, "ntcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntcer500ApplicationJson)
    ], NtcerResponse.prototype, "ntcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntcer502ApplicationJson)
    ], NtcerResponse.prototype, "ntcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntcer503ApplicationJson)
    ], NtcerResponse.prototype, "ntcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntcer504ApplicationJson)
    ], NtcerResponse.prototype, "ntcer504ApplicationJSONObject", void 0);
    return NtcerResponse;
}(utils_1.SpeakeasyBase));
exports.NtcerResponse = NtcerResponse;
