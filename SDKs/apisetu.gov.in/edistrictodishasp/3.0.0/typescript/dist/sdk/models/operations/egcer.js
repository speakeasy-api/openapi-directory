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
exports.EgcerResponse = exports.EgcerRequest = exports.Egcer504ApplicationJson = exports.Egcer504ApplicationJsonErrorDescriptionEnum = exports.Egcer504ApplicationJsonErrorEnum = exports.Egcer503ApplicationJson = exports.Egcer503ApplicationJsonErrorDescriptionEnum = exports.Egcer503ApplicationJsonErrorEnum = exports.Egcer502ApplicationJson = exports.Egcer502ApplicationJsonErrorDescriptionEnum = exports.Egcer502ApplicationJsonErrorEnum = exports.Egcer500ApplicationJson = exports.Egcer500ApplicationJsonErrorDescriptionEnum = exports.Egcer500ApplicationJsonErrorEnum = exports.Egcer404ApplicationJson = exports.Egcer404ApplicationJsonErrorDescriptionEnum = exports.Egcer404ApplicationJsonErrorEnum = exports.Egcer401ApplicationJson = exports.Egcer401ApplicationJsonErrorDescriptionEnum = exports.Egcer401ApplicationJsonErrorEnum = exports.Egcer400ApplicationJson = exports.Egcer400ApplicationJsonErrorDescriptionEnum = exports.Egcer400ApplicationJsonErrorEnum = exports.EgcerSecurity = exports.EgcerRequestBody = exports.EgcerRequestBodyFormatEnum = exports.EgcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EgcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(EgcerRequestBodyCertificateParameters, _super);
    function EgcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], EgcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], EgcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], EgcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], EgcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return EgcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.EgcerRequestBodyCertificateParameters = EgcerRequestBodyCertificateParameters;
var EgcerRequestBodyFormatEnum;
(function (EgcerRequestBodyFormatEnum) {
    EgcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(EgcerRequestBodyFormatEnum = exports.EgcerRequestBodyFormatEnum || (exports.EgcerRequestBodyFormatEnum = {}));
var EgcerRequestBody = /** @class */ (function (_super) {
    __extends(EgcerRequestBody, _super);
    function EgcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", EgcerRequestBodyCertificateParameters)
    ], EgcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], EgcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], EgcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], EgcerRequestBody.prototype, "txnId", void 0);
    return EgcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.EgcerRequestBody = EgcerRequestBody;
var EgcerSecurity = /** @class */ (function (_super) {
    __extends(EgcerSecurity, _super);
    function EgcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EgcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], EgcerSecurity.prototype, "clientId", void 0);
    return EgcerSecurity;
}(utils_1.SpeakeasyBase));
exports.EgcerSecurity = EgcerSecurity;
var Egcer400ApplicationJsonErrorEnum;
(function (Egcer400ApplicationJsonErrorEnum) {
    Egcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Egcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Egcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Egcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Egcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Egcer400ApplicationJsonErrorEnum = exports.Egcer400ApplicationJsonErrorEnum || (exports.Egcer400ApplicationJsonErrorEnum = {}));
var Egcer400ApplicationJsonErrorDescriptionEnum;
(function (Egcer400ApplicationJsonErrorDescriptionEnum) {
    Egcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Egcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Egcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Egcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Egcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Egcer400ApplicationJsonErrorDescriptionEnum = exports.Egcer400ApplicationJsonErrorDescriptionEnum || (exports.Egcer400ApplicationJsonErrorDescriptionEnum = {}));
var Egcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer400ApplicationJson, _super);
    function Egcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egcer400ApplicationJson = Egcer400ApplicationJson;
var Egcer401ApplicationJsonErrorEnum;
(function (Egcer401ApplicationJsonErrorEnum) {
    Egcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Egcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Egcer401ApplicationJsonErrorEnum = exports.Egcer401ApplicationJsonErrorEnum || (exports.Egcer401ApplicationJsonErrorEnum = {}));
var Egcer401ApplicationJsonErrorDescriptionEnum;
(function (Egcer401ApplicationJsonErrorDescriptionEnum) {
    Egcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Egcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Egcer401ApplicationJsonErrorDescriptionEnum = exports.Egcer401ApplicationJsonErrorDescriptionEnum || (exports.Egcer401ApplicationJsonErrorDescriptionEnum = {}));
var Egcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer401ApplicationJson, _super);
    function Egcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egcer401ApplicationJson = Egcer401ApplicationJson;
var Egcer404ApplicationJsonErrorEnum;
(function (Egcer404ApplicationJsonErrorEnum) {
    Egcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Egcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Egcer404ApplicationJsonErrorEnum = exports.Egcer404ApplicationJsonErrorEnum || (exports.Egcer404ApplicationJsonErrorEnum = {}));
var Egcer404ApplicationJsonErrorDescriptionEnum;
(function (Egcer404ApplicationJsonErrorDescriptionEnum) {
    Egcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Egcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Egcer404ApplicationJsonErrorDescriptionEnum = exports.Egcer404ApplicationJsonErrorDescriptionEnum || (exports.Egcer404ApplicationJsonErrorDescriptionEnum = {}));
var Egcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer404ApplicationJson, _super);
    function Egcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egcer404ApplicationJson = Egcer404ApplicationJson;
var Egcer500ApplicationJsonErrorEnum;
(function (Egcer500ApplicationJsonErrorEnum) {
    Egcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Egcer500ApplicationJsonErrorEnum = exports.Egcer500ApplicationJsonErrorEnum || (exports.Egcer500ApplicationJsonErrorEnum = {}));
var Egcer500ApplicationJsonErrorDescriptionEnum;
(function (Egcer500ApplicationJsonErrorDescriptionEnum) {
    Egcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Egcer500ApplicationJsonErrorDescriptionEnum = exports.Egcer500ApplicationJsonErrorDescriptionEnum || (exports.Egcer500ApplicationJsonErrorDescriptionEnum = {}));
var Egcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer500ApplicationJson, _super);
    function Egcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egcer500ApplicationJson = Egcer500ApplicationJson;
var Egcer502ApplicationJsonErrorEnum;
(function (Egcer502ApplicationJsonErrorEnum) {
    Egcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Egcer502ApplicationJsonErrorEnum = exports.Egcer502ApplicationJsonErrorEnum || (exports.Egcer502ApplicationJsonErrorEnum = {}));
var Egcer502ApplicationJsonErrorDescriptionEnum;
(function (Egcer502ApplicationJsonErrorDescriptionEnum) {
    Egcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Egcer502ApplicationJsonErrorDescriptionEnum = exports.Egcer502ApplicationJsonErrorDescriptionEnum || (exports.Egcer502ApplicationJsonErrorDescriptionEnum = {}));
var Egcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer502ApplicationJson, _super);
    function Egcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egcer502ApplicationJson = Egcer502ApplicationJson;
var Egcer503ApplicationJsonErrorEnum;
(function (Egcer503ApplicationJsonErrorEnum) {
    Egcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Egcer503ApplicationJsonErrorEnum = exports.Egcer503ApplicationJsonErrorEnum || (exports.Egcer503ApplicationJsonErrorEnum = {}));
var Egcer503ApplicationJsonErrorDescriptionEnum;
(function (Egcer503ApplicationJsonErrorDescriptionEnum) {
    Egcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Egcer503ApplicationJsonErrorDescriptionEnum = exports.Egcer503ApplicationJsonErrorDescriptionEnum || (exports.Egcer503ApplicationJsonErrorDescriptionEnum = {}));
var Egcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer503ApplicationJson, _super);
    function Egcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egcer503ApplicationJson = Egcer503ApplicationJson;
var Egcer504ApplicationJsonErrorEnum;
(function (Egcer504ApplicationJsonErrorEnum) {
    Egcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Egcer504ApplicationJsonErrorEnum = exports.Egcer504ApplicationJsonErrorEnum || (exports.Egcer504ApplicationJsonErrorEnum = {}));
var Egcer504ApplicationJsonErrorDescriptionEnum;
(function (Egcer504ApplicationJsonErrorDescriptionEnum) {
    Egcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Egcer504ApplicationJsonErrorDescriptionEnum = exports.Egcer504ApplicationJsonErrorDescriptionEnum || (exports.Egcer504ApplicationJsonErrorDescriptionEnum = {}));
var Egcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Egcer504ApplicationJson, _super);
    function Egcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Egcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egcer504ApplicationJson = Egcer504ApplicationJson;
var EgcerRequest = /** @class */ (function (_super) {
    __extends(EgcerRequest, _super);
    function EgcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EgcerRequestBody)
    ], EgcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EgcerSecurity)
    ], EgcerRequest.prototype, "security", void 0);
    return EgcerRequest;
}(utils_1.SpeakeasyBase));
exports.EgcerRequest = EgcerRequest;
var EgcerResponse = /** @class */ (function (_super) {
    __extends(EgcerResponse, _super);
    function EgcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EgcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EgcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egcer400ApplicationJson)
    ], EgcerResponse.prototype, "egcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egcer401ApplicationJson)
    ], EgcerResponse.prototype, "egcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egcer404ApplicationJson)
    ], EgcerResponse.prototype, "egcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egcer500ApplicationJson)
    ], EgcerResponse.prototype, "egcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egcer502ApplicationJson)
    ], EgcerResponse.prototype, "egcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egcer503ApplicationJson)
    ], EgcerResponse.prototype, "egcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egcer504ApplicationJson)
    ], EgcerResponse.prototype, "egcer504ApplicationJSONObject", void 0);
    return EgcerResponse;
}(utils_1.SpeakeasyBase));
exports.EgcerResponse = EgcerResponse;
