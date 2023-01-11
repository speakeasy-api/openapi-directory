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
exports.SslcsResponse = exports.SslcsRequest = exports.Sslcs504ApplicationJson = exports.Sslcs504ApplicationJsonErrorDescriptionEnum = exports.Sslcs504ApplicationJsonErrorEnum = exports.Sslcs503ApplicationJson = exports.Sslcs503ApplicationJsonErrorDescriptionEnum = exports.Sslcs503ApplicationJsonErrorEnum = exports.Sslcs502ApplicationJson = exports.Sslcs502ApplicationJsonErrorDescriptionEnum = exports.Sslcs502ApplicationJsonErrorEnum = exports.Sslcs500ApplicationJson = exports.Sslcs500ApplicationJsonErrorDescriptionEnum = exports.Sslcs500ApplicationJsonErrorEnum = exports.Sslcs404ApplicationJson = exports.Sslcs404ApplicationJsonErrorDescriptionEnum = exports.Sslcs404ApplicationJsonErrorEnum = exports.Sslcs401ApplicationJson = exports.Sslcs401ApplicationJsonErrorDescriptionEnum = exports.Sslcs401ApplicationJsonErrorEnum = exports.Sslcs400ApplicationJson = exports.Sslcs400ApplicationJsonErrorDescriptionEnum = exports.Sslcs400ApplicationJsonErrorEnum = exports.SslcsSecurity = exports.SslcsRequestBody = exports.SslcsRequestBodyFormatEnum = exports.SslcsRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SslcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SslcsRequestBodyCertificateParameters, _super);
    function SslcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], SslcsRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], SslcsRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return SslcsRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SslcsRequestBodyCertificateParameters = SslcsRequestBodyCertificateParameters;
var SslcsRequestBodyFormatEnum;
(function (SslcsRequestBodyFormatEnum) {
    SslcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(SslcsRequestBodyFormatEnum = exports.SslcsRequestBodyFormatEnum || (exports.SslcsRequestBodyFormatEnum = {}));
var SslcsRequestBody = /** @class */ (function (_super) {
    __extends(SslcsRequestBody, _super);
    function SslcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SslcsRequestBodyCertificateParameters)
    ], SslcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SslcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SslcsRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SslcsRequestBody.prototype, "txnId", void 0);
    return SslcsRequestBody;
}(utils_1.SpeakeasyBase));
exports.SslcsRequestBody = SslcsRequestBody;
var SslcsSecurity = /** @class */ (function (_super) {
    __extends(SslcsSecurity, _super);
    function SslcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SslcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SslcsSecurity.prototype, "clientId", void 0);
    return SslcsSecurity;
}(utils_1.SpeakeasyBase));
exports.SslcsSecurity = SslcsSecurity;
var Sslcs400ApplicationJsonErrorEnum;
(function (Sslcs400ApplicationJsonErrorEnum) {
    Sslcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sslcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sslcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sslcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sslcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sslcs400ApplicationJsonErrorEnum = exports.Sslcs400ApplicationJsonErrorEnum || (exports.Sslcs400ApplicationJsonErrorEnum = {}));
var Sslcs400ApplicationJsonErrorDescriptionEnum;
(function (Sslcs400ApplicationJsonErrorDescriptionEnum) {
    Sslcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sslcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sslcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sslcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sslcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sslcs400ApplicationJsonErrorDescriptionEnum = exports.Sslcs400ApplicationJsonErrorDescriptionEnum || (exports.Sslcs400ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs400ApplicationJson, _super);
    function Sslcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sslcs400ApplicationJson = Sslcs400ApplicationJson;
var Sslcs401ApplicationJsonErrorEnum;
(function (Sslcs401ApplicationJsonErrorEnum) {
    Sslcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sslcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sslcs401ApplicationJsonErrorEnum = exports.Sslcs401ApplicationJsonErrorEnum || (exports.Sslcs401ApplicationJsonErrorEnum = {}));
var Sslcs401ApplicationJsonErrorDescriptionEnum;
(function (Sslcs401ApplicationJsonErrorDescriptionEnum) {
    Sslcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sslcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sslcs401ApplicationJsonErrorDescriptionEnum = exports.Sslcs401ApplicationJsonErrorDescriptionEnum || (exports.Sslcs401ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs401ApplicationJson, _super);
    function Sslcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sslcs401ApplicationJson = Sslcs401ApplicationJson;
var Sslcs404ApplicationJsonErrorEnum;
(function (Sslcs404ApplicationJsonErrorEnum) {
    Sslcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sslcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sslcs404ApplicationJsonErrorEnum = exports.Sslcs404ApplicationJsonErrorEnum || (exports.Sslcs404ApplicationJsonErrorEnum = {}));
var Sslcs404ApplicationJsonErrorDescriptionEnum;
(function (Sslcs404ApplicationJsonErrorDescriptionEnum) {
    Sslcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sslcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sslcs404ApplicationJsonErrorDescriptionEnum = exports.Sslcs404ApplicationJsonErrorDescriptionEnum || (exports.Sslcs404ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs404ApplicationJson, _super);
    function Sslcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sslcs404ApplicationJson = Sslcs404ApplicationJson;
var Sslcs500ApplicationJsonErrorEnum;
(function (Sslcs500ApplicationJsonErrorEnum) {
    Sslcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sslcs500ApplicationJsonErrorEnum = exports.Sslcs500ApplicationJsonErrorEnum || (exports.Sslcs500ApplicationJsonErrorEnum = {}));
var Sslcs500ApplicationJsonErrorDescriptionEnum;
(function (Sslcs500ApplicationJsonErrorDescriptionEnum) {
    Sslcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sslcs500ApplicationJsonErrorDescriptionEnum = exports.Sslcs500ApplicationJsonErrorDescriptionEnum || (exports.Sslcs500ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs500ApplicationJson, _super);
    function Sslcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sslcs500ApplicationJson = Sslcs500ApplicationJson;
var Sslcs502ApplicationJsonErrorEnum;
(function (Sslcs502ApplicationJsonErrorEnum) {
    Sslcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sslcs502ApplicationJsonErrorEnum = exports.Sslcs502ApplicationJsonErrorEnum || (exports.Sslcs502ApplicationJsonErrorEnum = {}));
var Sslcs502ApplicationJsonErrorDescriptionEnum;
(function (Sslcs502ApplicationJsonErrorDescriptionEnum) {
    Sslcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sslcs502ApplicationJsonErrorDescriptionEnum = exports.Sslcs502ApplicationJsonErrorDescriptionEnum || (exports.Sslcs502ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs502ApplicationJson, _super);
    function Sslcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sslcs502ApplicationJson = Sslcs502ApplicationJson;
var Sslcs503ApplicationJsonErrorEnum;
(function (Sslcs503ApplicationJsonErrorEnum) {
    Sslcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sslcs503ApplicationJsonErrorEnum = exports.Sslcs503ApplicationJsonErrorEnum || (exports.Sslcs503ApplicationJsonErrorEnum = {}));
var Sslcs503ApplicationJsonErrorDescriptionEnum;
(function (Sslcs503ApplicationJsonErrorDescriptionEnum) {
    Sslcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sslcs503ApplicationJsonErrorDescriptionEnum = exports.Sslcs503ApplicationJsonErrorDescriptionEnum || (exports.Sslcs503ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs503ApplicationJson, _super);
    function Sslcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sslcs503ApplicationJson = Sslcs503ApplicationJson;
var Sslcs504ApplicationJsonErrorEnum;
(function (Sslcs504ApplicationJsonErrorEnum) {
    Sslcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sslcs504ApplicationJsonErrorEnum = exports.Sslcs504ApplicationJsonErrorEnum || (exports.Sslcs504ApplicationJsonErrorEnum = {}));
var Sslcs504ApplicationJsonErrorDescriptionEnum;
(function (Sslcs504ApplicationJsonErrorDescriptionEnum) {
    Sslcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sslcs504ApplicationJsonErrorDescriptionEnum = exports.Sslcs504ApplicationJsonErrorDescriptionEnum || (exports.Sslcs504ApplicationJsonErrorDescriptionEnum = {}));
var Sslcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sslcs504ApplicationJson, _super);
    function Sslcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sslcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sslcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Sslcs504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sslcs504ApplicationJson = Sslcs504ApplicationJson;
var SslcsRequest = /** @class */ (function (_super) {
    __extends(SslcsRequest, _super);
    function SslcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SslcsRequestBody)
    ], SslcsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SslcsSecurity)
    ], SslcsRequest.prototype, "security", void 0);
    return SslcsRequest;
}(utils_1.SpeakeasyBase));
exports.SslcsRequest = SslcsRequest;
var SslcsResponse = /** @class */ (function (_super) {
    __extends(SslcsResponse, _super);
    function SslcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SslcsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SslcsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sslcs400ApplicationJson)
    ], SslcsResponse.prototype, "sslcs400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sslcs401ApplicationJson)
    ], SslcsResponse.prototype, "sslcs401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sslcs404ApplicationJson)
    ], SslcsResponse.prototype, "sslcs404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sslcs500ApplicationJson)
    ], SslcsResponse.prototype, "sslcs500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sslcs502ApplicationJson)
    ], SslcsResponse.prototype, "sslcs502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sslcs503ApplicationJson)
    ], SslcsResponse.prototype, "sslcs503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sslcs504ApplicationJson)
    ], SslcsResponse.prototype, "sslcs504ApplicationJSONObject", void 0);
    return SslcsResponse;
}(utils_1.SpeakeasyBase));
exports.SslcsResponse = SslcsResponse;
