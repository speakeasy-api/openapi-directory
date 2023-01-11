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
exports.NbcerResponse = exports.NbcerRequest = exports.Nbcer504ApplicationJson = exports.Nbcer504ApplicationJsonErrorDescriptionEnum = exports.Nbcer504ApplicationJsonErrorEnum = exports.Nbcer503ApplicationJson = exports.Nbcer503ApplicationJsonErrorDescriptionEnum = exports.Nbcer503ApplicationJsonErrorEnum = exports.Nbcer502ApplicationJson = exports.Nbcer502ApplicationJsonErrorDescriptionEnum = exports.Nbcer502ApplicationJsonErrorEnum = exports.Nbcer500ApplicationJson = exports.Nbcer500ApplicationJsonErrorDescriptionEnum = exports.Nbcer500ApplicationJsonErrorEnum = exports.Nbcer404ApplicationJson = exports.Nbcer404ApplicationJsonErrorDescriptionEnum = exports.Nbcer404ApplicationJsonErrorEnum = exports.Nbcer401ApplicationJson = exports.Nbcer401ApplicationJsonErrorDescriptionEnum = exports.Nbcer401ApplicationJsonErrorEnum = exports.Nbcer400ApplicationJson = exports.Nbcer400ApplicationJsonErrorDescriptionEnum = exports.Nbcer400ApplicationJsonErrorEnum = exports.NbcerSecurity = exports.NbcerRequestBody = exports.NbcerRequestBodyFormatEnum = exports.NbcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NbcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NbcerRequestBodyCertificateParameters, _super);
    function NbcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], NbcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], NbcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return NbcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.NbcerRequestBodyCertificateParameters = NbcerRequestBodyCertificateParameters;
var NbcerRequestBodyFormatEnum;
(function (NbcerRequestBodyFormatEnum) {
    NbcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(NbcerRequestBodyFormatEnum = exports.NbcerRequestBodyFormatEnum || (exports.NbcerRequestBodyFormatEnum = {}));
var NbcerRequestBody = /** @class */ (function (_super) {
    __extends(NbcerRequestBody, _super);
    function NbcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NbcerRequestBodyCertificateParameters)
    ], NbcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NbcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NbcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NbcerRequestBody.prototype, "txnId", void 0);
    return NbcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.NbcerRequestBody = NbcerRequestBody;
var NbcerSecurity = /** @class */ (function (_super) {
    __extends(NbcerSecurity, _super);
    function NbcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NbcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NbcerSecurity.prototype, "clientId", void 0);
    return NbcerSecurity;
}(utils_1.SpeakeasyBase));
exports.NbcerSecurity = NbcerSecurity;
var Nbcer400ApplicationJsonErrorEnum;
(function (Nbcer400ApplicationJsonErrorEnum) {
    Nbcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nbcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nbcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nbcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nbcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nbcer400ApplicationJsonErrorEnum = exports.Nbcer400ApplicationJsonErrorEnum || (exports.Nbcer400ApplicationJsonErrorEnum = {}));
var Nbcer400ApplicationJsonErrorDescriptionEnum;
(function (Nbcer400ApplicationJsonErrorDescriptionEnum) {
    Nbcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nbcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nbcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nbcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nbcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nbcer400ApplicationJsonErrorDescriptionEnum = exports.Nbcer400ApplicationJsonErrorDescriptionEnum || (exports.Nbcer400ApplicationJsonErrorDescriptionEnum = {}));
var Nbcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nbcer400ApplicationJson, _super);
    function Nbcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nbcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nbcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Nbcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nbcer400ApplicationJson = Nbcer400ApplicationJson;
var Nbcer401ApplicationJsonErrorEnum;
(function (Nbcer401ApplicationJsonErrorEnum) {
    Nbcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nbcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nbcer401ApplicationJsonErrorEnum = exports.Nbcer401ApplicationJsonErrorEnum || (exports.Nbcer401ApplicationJsonErrorEnum = {}));
var Nbcer401ApplicationJsonErrorDescriptionEnum;
(function (Nbcer401ApplicationJsonErrorDescriptionEnum) {
    Nbcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nbcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nbcer401ApplicationJsonErrorDescriptionEnum = exports.Nbcer401ApplicationJsonErrorDescriptionEnum || (exports.Nbcer401ApplicationJsonErrorDescriptionEnum = {}));
var Nbcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nbcer401ApplicationJson, _super);
    function Nbcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nbcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nbcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Nbcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nbcer401ApplicationJson = Nbcer401ApplicationJson;
var Nbcer404ApplicationJsonErrorEnum;
(function (Nbcer404ApplicationJsonErrorEnum) {
    Nbcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nbcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nbcer404ApplicationJsonErrorEnum = exports.Nbcer404ApplicationJsonErrorEnum || (exports.Nbcer404ApplicationJsonErrorEnum = {}));
var Nbcer404ApplicationJsonErrorDescriptionEnum;
(function (Nbcer404ApplicationJsonErrorDescriptionEnum) {
    Nbcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nbcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nbcer404ApplicationJsonErrorDescriptionEnum = exports.Nbcer404ApplicationJsonErrorDescriptionEnum || (exports.Nbcer404ApplicationJsonErrorDescriptionEnum = {}));
var Nbcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nbcer404ApplicationJson, _super);
    function Nbcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nbcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nbcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Nbcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nbcer404ApplicationJson = Nbcer404ApplicationJson;
var Nbcer500ApplicationJsonErrorEnum;
(function (Nbcer500ApplicationJsonErrorEnum) {
    Nbcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nbcer500ApplicationJsonErrorEnum = exports.Nbcer500ApplicationJsonErrorEnum || (exports.Nbcer500ApplicationJsonErrorEnum = {}));
var Nbcer500ApplicationJsonErrorDescriptionEnum;
(function (Nbcer500ApplicationJsonErrorDescriptionEnum) {
    Nbcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nbcer500ApplicationJsonErrorDescriptionEnum = exports.Nbcer500ApplicationJsonErrorDescriptionEnum || (exports.Nbcer500ApplicationJsonErrorDescriptionEnum = {}));
var Nbcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nbcer500ApplicationJson, _super);
    function Nbcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nbcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nbcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Nbcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nbcer500ApplicationJson = Nbcer500ApplicationJson;
var Nbcer502ApplicationJsonErrorEnum;
(function (Nbcer502ApplicationJsonErrorEnum) {
    Nbcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nbcer502ApplicationJsonErrorEnum = exports.Nbcer502ApplicationJsonErrorEnum || (exports.Nbcer502ApplicationJsonErrorEnum = {}));
var Nbcer502ApplicationJsonErrorDescriptionEnum;
(function (Nbcer502ApplicationJsonErrorDescriptionEnum) {
    Nbcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nbcer502ApplicationJsonErrorDescriptionEnum = exports.Nbcer502ApplicationJsonErrorDescriptionEnum || (exports.Nbcer502ApplicationJsonErrorDescriptionEnum = {}));
var Nbcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nbcer502ApplicationJson, _super);
    function Nbcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nbcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nbcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Nbcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nbcer502ApplicationJson = Nbcer502ApplicationJson;
var Nbcer503ApplicationJsonErrorEnum;
(function (Nbcer503ApplicationJsonErrorEnum) {
    Nbcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nbcer503ApplicationJsonErrorEnum = exports.Nbcer503ApplicationJsonErrorEnum || (exports.Nbcer503ApplicationJsonErrorEnum = {}));
var Nbcer503ApplicationJsonErrorDescriptionEnum;
(function (Nbcer503ApplicationJsonErrorDescriptionEnum) {
    Nbcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nbcer503ApplicationJsonErrorDescriptionEnum = exports.Nbcer503ApplicationJsonErrorDescriptionEnum || (exports.Nbcer503ApplicationJsonErrorDescriptionEnum = {}));
var Nbcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nbcer503ApplicationJson, _super);
    function Nbcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nbcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nbcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Nbcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nbcer503ApplicationJson = Nbcer503ApplicationJson;
var Nbcer504ApplicationJsonErrorEnum;
(function (Nbcer504ApplicationJsonErrorEnum) {
    Nbcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nbcer504ApplicationJsonErrorEnum = exports.Nbcer504ApplicationJsonErrorEnum || (exports.Nbcer504ApplicationJsonErrorEnum = {}));
var Nbcer504ApplicationJsonErrorDescriptionEnum;
(function (Nbcer504ApplicationJsonErrorDescriptionEnum) {
    Nbcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nbcer504ApplicationJsonErrorDescriptionEnum = exports.Nbcer504ApplicationJsonErrorDescriptionEnum || (exports.Nbcer504ApplicationJsonErrorDescriptionEnum = {}));
var Nbcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nbcer504ApplicationJson, _super);
    function Nbcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nbcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nbcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Nbcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nbcer504ApplicationJson = Nbcer504ApplicationJson;
var NbcerRequest = /** @class */ (function (_super) {
    __extends(NbcerRequest, _super);
    function NbcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NbcerRequestBody)
    ], NbcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NbcerSecurity)
    ], NbcerRequest.prototype, "security", void 0);
    return NbcerRequest;
}(utils_1.SpeakeasyBase));
exports.NbcerRequest = NbcerRequest;
var NbcerResponse = /** @class */ (function (_super) {
    __extends(NbcerResponse, _super);
    function NbcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NbcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NbcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nbcer400ApplicationJson)
    ], NbcerResponse.prototype, "nbcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nbcer401ApplicationJson)
    ], NbcerResponse.prototype, "nbcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nbcer404ApplicationJson)
    ], NbcerResponse.prototype, "nbcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nbcer500ApplicationJson)
    ], NbcerResponse.prototype, "nbcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nbcer502ApplicationJson)
    ], NbcerResponse.prototype, "nbcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nbcer503ApplicationJson)
    ], NbcerResponse.prototype, "nbcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nbcer504ApplicationJson)
    ], NbcerResponse.prototype, "nbcer504ApplicationJSONObject", void 0);
    return NbcerResponse;
}(utils_1.SpeakeasyBase));
exports.NbcerResponse = NbcerResponse;
