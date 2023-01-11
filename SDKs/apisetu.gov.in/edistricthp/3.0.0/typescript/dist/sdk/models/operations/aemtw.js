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
exports.AemtwResponse = exports.AemtwRequest = exports.Aemtw504ApplicationJson = exports.Aemtw504ApplicationJsonErrorDescriptionEnum = exports.Aemtw504ApplicationJsonErrorEnum = exports.Aemtw503ApplicationJson = exports.Aemtw503ApplicationJsonErrorDescriptionEnum = exports.Aemtw503ApplicationJsonErrorEnum = exports.Aemtw502ApplicationJson = exports.Aemtw502ApplicationJsonErrorDescriptionEnum = exports.Aemtw502ApplicationJsonErrorEnum = exports.Aemtw500ApplicationJson = exports.Aemtw500ApplicationJsonErrorDescriptionEnum = exports.Aemtw500ApplicationJsonErrorEnum = exports.Aemtw404ApplicationJson = exports.Aemtw404ApplicationJsonErrorDescriptionEnum = exports.Aemtw404ApplicationJsonErrorEnum = exports.Aemtw401ApplicationJson = exports.Aemtw401ApplicationJsonErrorDescriptionEnum = exports.Aemtw401ApplicationJsonErrorEnum = exports.Aemtw400ApplicationJson = exports.Aemtw400ApplicationJsonErrorDescriptionEnum = exports.Aemtw400ApplicationJsonErrorEnum = exports.AemtwSecurity = exports.AemtwRequestBody = exports.AemtwRequestBodyFormatEnum = exports.AemtwRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AemtwRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AemtwRequestBodyCertificateParameters, _super);
    function AemtwRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], AemtwRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return AemtwRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.AemtwRequestBodyCertificateParameters = AemtwRequestBodyCertificateParameters;
var AemtwRequestBodyFormatEnum;
(function (AemtwRequestBodyFormatEnum) {
    AemtwRequestBodyFormatEnum["Pdf"] = "pdf";
})(AemtwRequestBodyFormatEnum = exports.AemtwRequestBodyFormatEnum || (exports.AemtwRequestBodyFormatEnum = {}));
var AemtwRequestBody = /** @class */ (function (_super) {
    __extends(AemtwRequestBody, _super);
    function AemtwRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AemtwRequestBodyCertificateParameters)
    ], AemtwRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AemtwRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AemtwRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AemtwRequestBody.prototype, "txnId", void 0);
    return AemtwRequestBody;
}(utils_1.SpeakeasyBase));
exports.AemtwRequestBody = AemtwRequestBody;
var AemtwSecurity = /** @class */ (function (_super) {
    __extends(AemtwSecurity, _super);
    function AemtwSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AemtwSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AemtwSecurity.prototype, "clientId", void 0);
    return AemtwSecurity;
}(utils_1.SpeakeasyBase));
exports.AemtwSecurity = AemtwSecurity;
var Aemtw400ApplicationJsonErrorEnum;
(function (Aemtw400ApplicationJsonErrorEnum) {
    Aemtw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Aemtw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Aemtw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Aemtw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Aemtw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Aemtw400ApplicationJsonErrorEnum = exports.Aemtw400ApplicationJsonErrorEnum || (exports.Aemtw400ApplicationJsonErrorEnum = {}));
var Aemtw400ApplicationJsonErrorDescriptionEnum;
(function (Aemtw400ApplicationJsonErrorDescriptionEnum) {
    Aemtw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Aemtw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Aemtw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Aemtw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Aemtw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Aemtw400ApplicationJsonErrorDescriptionEnum = exports.Aemtw400ApplicationJsonErrorDescriptionEnum || (exports.Aemtw400ApplicationJsonErrorDescriptionEnum = {}));
var Aemtw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Aemtw400ApplicationJson, _super);
    function Aemtw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aemtw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aemtw400ApplicationJson.prototype, "errorDescription", void 0);
    return Aemtw400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Aemtw400ApplicationJson = Aemtw400ApplicationJson;
var Aemtw401ApplicationJsonErrorEnum;
(function (Aemtw401ApplicationJsonErrorEnum) {
    Aemtw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Aemtw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Aemtw401ApplicationJsonErrorEnum = exports.Aemtw401ApplicationJsonErrorEnum || (exports.Aemtw401ApplicationJsonErrorEnum = {}));
var Aemtw401ApplicationJsonErrorDescriptionEnum;
(function (Aemtw401ApplicationJsonErrorDescriptionEnum) {
    Aemtw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Aemtw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Aemtw401ApplicationJsonErrorDescriptionEnum = exports.Aemtw401ApplicationJsonErrorDescriptionEnum || (exports.Aemtw401ApplicationJsonErrorDescriptionEnum = {}));
var Aemtw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Aemtw401ApplicationJson, _super);
    function Aemtw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aemtw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aemtw401ApplicationJson.prototype, "errorDescription", void 0);
    return Aemtw401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Aemtw401ApplicationJson = Aemtw401ApplicationJson;
var Aemtw404ApplicationJsonErrorEnum;
(function (Aemtw404ApplicationJsonErrorEnum) {
    Aemtw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Aemtw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Aemtw404ApplicationJsonErrorEnum = exports.Aemtw404ApplicationJsonErrorEnum || (exports.Aemtw404ApplicationJsonErrorEnum = {}));
var Aemtw404ApplicationJsonErrorDescriptionEnum;
(function (Aemtw404ApplicationJsonErrorDescriptionEnum) {
    Aemtw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Aemtw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Aemtw404ApplicationJsonErrorDescriptionEnum = exports.Aemtw404ApplicationJsonErrorDescriptionEnum || (exports.Aemtw404ApplicationJsonErrorDescriptionEnum = {}));
var Aemtw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Aemtw404ApplicationJson, _super);
    function Aemtw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aemtw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aemtw404ApplicationJson.prototype, "errorDescription", void 0);
    return Aemtw404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Aemtw404ApplicationJson = Aemtw404ApplicationJson;
var Aemtw500ApplicationJsonErrorEnum;
(function (Aemtw500ApplicationJsonErrorEnum) {
    Aemtw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Aemtw500ApplicationJsonErrorEnum = exports.Aemtw500ApplicationJsonErrorEnum || (exports.Aemtw500ApplicationJsonErrorEnum = {}));
var Aemtw500ApplicationJsonErrorDescriptionEnum;
(function (Aemtw500ApplicationJsonErrorDescriptionEnum) {
    Aemtw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Aemtw500ApplicationJsonErrorDescriptionEnum = exports.Aemtw500ApplicationJsonErrorDescriptionEnum || (exports.Aemtw500ApplicationJsonErrorDescriptionEnum = {}));
var Aemtw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Aemtw500ApplicationJson, _super);
    function Aemtw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aemtw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aemtw500ApplicationJson.prototype, "errorDescription", void 0);
    return Aemtw500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Aemtw500ApplicationJson = Aemtw500ApplicationJson;
var Aemtw502ApplicationJsonErrorEnum;
(function (Aemtw502ApplicationJsonErrorEnum) {
    Aemtw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Aemtw502ApplicationJsonErrorEnum = exports.Aemtw502ApplicationJsonErrorEnum || (exports.Aemtw502ApplicationJsonErrorEnum = {}));
var Aemtw502ApplicationJsonErrorDescriptionEnum;
(function (Aemtw502ApplicationJsonErrorDescriptionEnum) {
    Aemtw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Aemtw502ApplicationJsonErrorDescriptionEnum = exports.Aemtw502ApplicationJsonErrorDescriptionEnum || (exports.Aemtw502ApplicationJsonErrorDescriptionEnum = {}));
var Aemtw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Aemtw502ApplicationJson, _super);
    function Aemtw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aemtw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aemtw502ApplicationJson.prototype, "errorDescription", void 0);
    return Aemtw502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Aemtw502ApplicationJson = Aemtw502ApplicationJson;
var Aemtw503ApplicationJsonErrorEnum;
(function (Aemtw503ApplicationJsonErrorEnum) {
    Aemtw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Aemtw503ApplicationJsonErrorEnum = exports.Aemtw503ApplicationJsonErrorEnum || (exports.Aemtw503ApplicationJsonErrorEnum = {}));
var Aemtw503ApplicationJsonErrorDescriptionEnum;
(function (Aemtw503ApplicationJsonErrorDescriptionEnum) {
    Aemtw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Aemtw503ApplicationJsonErrorDescriptionEnum = exports.Aemtw503ApplicationJsonErrorDescriptionEnum || (exports.Aemtw503ApplicationJsonErrorDescriptionEnum = {}));
var Aemtw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Aemtw503ApplicationJson, _super);
    function Aemtw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aemtw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aemtw503ApplicationJson.prototype, "errorDescription", void 0);
    return Aemtw503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Aemtw503ApplicationJson = Aemtw503ApplicationJson;
var Aemtw504ApplicationJsonErrorEnum;
(function (Aemtw504ApplicationJsonErrorEnum) {
    Aemtw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Aemtw504ApplicationJsonErrorEnum = exports.Aemtw504ApplicationJsonErrorEnum || (exports.Aemtw504ApplicationJsonErrorEnum = {}));
var Aemtw504ApplicationJsonErrorDescriptionEnum;
(function (Aemtw504ApplicationJsonErrorDescriptionEnum) {
    Aemtw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Aemtw504ApplicationJsonErrorDescriptionEnum = exports.Aemtw504ApplicationJsonErrorDescriptionEnum || (exports.Aemtw504ApplicationJsonErrorDescriptionEnum = {}));
var Aemtw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Aemtw504ApplicationJson, _super);
    function Aemtw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Aemtw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Aemtw504ApplicationJson.prototype, "errorDescription", void 0);
    return Aemtw504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Aemtw504ApplicationJson = Aemtw504ApplicationJson;
var AemtwRequest = /** @class */ (function (_super) {
    __extends(AemtwRequest, _super);
    function AemtwRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AemtwRequestBody)
    ], AemtwRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AemtwSecurity)
    ], AemtwRequest.prototype, "security", void 0);
    return AemtwRequest;
}(utils_1.SpeakeasyBase));
exports.AemtwRequest = AemtwRequest;
var AemtwResponse = /** @class */ (function (_super) {
    __extends(AemtwResponse, _super);
    function AemtwResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AemtwResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AemtwResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Aemtw400ApplicationJson)
    ], AemtwResponse.prototype, "aemtw400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Aemtw401ApplicationJson)
    ], AemtwResponse.prototype, "aemtw401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Aemtw404ApplicationJson)
    ], AemtwResponse.prototype, "aemtw404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Aemtw500ApplicationJson)
    ], AemtwResponse.prototype, "aemtw500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Aemtw502ApplicationJson)
    ], AemtwResponse.prototype, "aemtw502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Aemtw503ApplicationJson)
    ], AemtwResponse.prototype, "aemtw503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Aemtw504ApplicationJson)
    ], AemtwResponse.prototype, "aemtw504ApplicationJSONObject", void 0);
    return AemtwResponse;
}(utils_1.SpeakeasyBase));
exports.AemtwResponse = AemtwResponse;
