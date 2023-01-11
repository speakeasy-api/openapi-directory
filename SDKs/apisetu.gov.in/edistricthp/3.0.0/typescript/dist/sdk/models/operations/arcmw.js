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
exports.ArcmwResponse = exports.ArcmwRequest = exports.Arcmw504ApplicationJson = exports.Arcmw504ApplicationJsonErrorDescriptionEnum = exports.Arcmw504ApplicationJsonErrorEnum = exports.Arcmw503ApplicationJson = exports.Arcmw503ApplicationJsonErrorDescriptionEnum = exports.Arcmw503ApplicationJsonErrorEnum = exports.Arcmw502ApplicationJson = exports.Arcmw502ApplicationJsonErrorDescriptionEnum = exports.Arcmw502ApplicationJsonErrorEnum = exports.Arcmw500ApplicationJson = exports.Arcmw500ApplicationJsonErrorDescriptionEnum = exports.Arcmw500ApplicationJsonErrorEnum = exports.Arcmw404ApplicationJson = exports.Arcmw404ApplicationJsonErrorDescriptionEnum = exports.Arcmw404ApplicationJsonErrorEnum = exports.Arcmw401ApplicationJson = exports.Arcmw401ApplicationJsonErrorDescriptionEnum = exports.Arcmw401ApplicationJsonErrorEnum = exports.Arcmw400ApplicationJson = exports.Arcmw400ApplicationJsonErrorDescriptionEnum = exports.Arcmw400ApplicationJsonErrorEnum = exports.ArcmwSecurity = exports.ArcmwRequestBody = exports.ArcmwRequestBodyFormatEnum = exports.ArcmwRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ArcmwRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ArcmwRequestBodyCertificateParameters, _super);
    function ArcmwRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], ArcmwRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return ArcmwRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.ArcmwRequestBodyCertificateParameters = ArcmwRequestBodyCertificateParameters;
var ArcmwRequestBodyFormatEnum;
(function (ArcmwRequestBodyFormatEnum) {
    ArcmwRequestBodyFormatEnum["Pdf"] = "pdf";
})(ArcmwRequestBodyFormatEnum = exports.ArcmwRequestBodyFormatEnum || (exports.ArcmwRequestBodyFormatEnum = {}));
var ArcmwRequestBody = /** @class */ (function (_super) {
    __extends(ArcmwRequestBody, _super);
    function ArcmwRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ArcmwRequestBodyCertificateParameters)
    ], ArcmwRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ArcmwRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ArcmwRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ArcmwRequestBody.prototype, "txnId", void 0);
    return ArcmwRequestBody;
}(utils_1.SpeakeasyBase));
exports.ArcmwRequestBody = ArcmwRequestBody;
var ArcmwSecurity = /** @class */ (function (_super) {
    __extends(ArcmwSecurity, _super);
    function ArcmwSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ArcmwSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ArcmwSecurity.prototype, "clientId", void 0);
    return ArcmwSecurity;
}(utils_1.SpeakeasyBase));
exports.ArcmwSecurity = ArcmwSecurity;
var Arcmw400ApplicationJsonErrorEnum;
(function (Arcmw400ApplicationJsonErrorEnum) {
    Arcmw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Arcmw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Arcmw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Arcmw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Arcmw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Arcmw400ApplicationJsonErrorEnum = exports.Arcmw400ApplicationJsonErrorEnum || (exports.Arcmw400ApplicationJsonErrorEnum = {}));
var Arcmw400ApplicationJsonErrorDescriptionEnum;
(function (Arcmw400ApplicationJsonErrorDescriptionEnum) {
    Arcmw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Arcmw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Arcmw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Arcmw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Arcmw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Arcmw400ApplicationJsonErrorDescriptionEnum = exports.Arcmw400ApplicationJsonErrorDescriptionEnum || (exports.Arcmw400ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw400ApplicationJson, _super);
    function Arcmw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw400ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Arcmw400ApplicationJson = Arcmw400ApplicationJson;
var Arcmw401ApplicationJsonErrorEnum;
(function (Arcmw401ApplicationJsonErrorEnum) {
    Arcmw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Arcmw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Arcmw401ApplicationJsonErrorEnum = exports.Arcmw401ApplicationJsonErrorEnum || (exports.Arcmw401ApplicationJsonErrorEnum = {}));
var Arcmw401ApplicationJsonErrorDescriptionEnum;
(function (Arcmw401ApplicationJsonErrorDescriptionEnum) {
    Arcmw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Arcmw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Arcmw401ApplicationJsonErrorDescriptionEnum = exports.Arcmw401ApplicationJsonErrorDescriptionEnum || (exports.Arcmw401ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw401ApplicationJson, _super);
    function Arcmw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw401ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Arcmw401ApplicationJson = Arcmw401ApplicationJson;
var Arcmw404ApplicationJsonErrorEnum;
(function (Arcmw404ApplicationJsonErrorEnum) {
    Arcmw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Arcmw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Arcmw404ApplicationJsonErrorEnum = exports.Arcmw404ApplicationJsonErrorEnum || (exports.Arcmw404ApplicationJsonErrorEnum = {}));
var Arcmw404ApplicationJsonErrorDescriptionEnum;
(function (Arcmw404ApplicationJsonErrorDescriptionEnum) {
    Arcmw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Arcmw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Arcmw404ApplicationJsonErrorDescriptionEnum = exports.Arcmw404ApplicationJsonErrorDescriptionEnum || (exports.Arcmw404ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw404ApplicationJson, _super);
    function Arcmw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw404ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Arcmw404ApplicationJson = Arcmw404ApplicationJson;
var Arcmw500ApplicationJsonErrorEnum;
(function (Arcmw500ApplicationJsonErrorEnum) {
    Arcmw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Arcmw500ApplicationJsonErrorEnum = exports.Arcmw500ApplicationJsonErrorEnum || (exports.Arcmw500ApplicationJsonErrorEnum = {}));
var Arcmw500ApplicationJsonErrorDescriptionEnum;
(function (Arcmw500ApplicationJsonErrorDescriptionEnum) {
    Arcmw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Arcmw500ApplicationJsonErrorDescriptionEnum = exports.Arcmw500ApplicationJsonErrorDescriptionEnum || (exports.Arcmw500ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw500ApplicationJson, _super);
    function Arcmw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw500ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Arcmw500ApplicationJson = Arcmw500ApplicationJson;
var Arcmw502ApplicationJsonErrorEnum;
(function (Arcmw502ApplicationJsonErrorEnum) {
    Arcmw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Arcmw502ApplicationJsonErrorEnum = exports.Arcmw502ApplicationJsonErrorEnum || (exports.Arcmw502ApplicationJsonErrorEnum = {}));
var Arcmw502ApplicationJsonErrorDescriptionEnum;
(function (Arcmw502ApplicationJsonErrorDescriptionEnum) {
    Arcmw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Arcmw502ApplicationJsonErrorDescriptionEnum = exports.Arcmw502ApplicationJsonErrorDescriptionEnum || (exports.Arcmw502ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw502ApplicationJson, _super);
    function Arcmw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw502ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Arcmw502ApplicationJson = Arcmw502ApplicationJson;
var Arcmw503ApplicationJsonErrorEnum;
(function (Arcmw503ApplicationJsonErrorEnum) {
    Arcmw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Arcmw503ApplicationJsonErrorEnum = exports.Arcmw503ApplicationJsonErrorEnum || (exports.Arcmw503ApplicationJsonErrorEnum = {}));
var Arcmw503ApplicationJsonErrorDescriptionEnum;
(function (Arcmw503ApplicationJsonErrorDescriptionEnum) {
    Arcmw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Arcmw503ApplicationJsonErrorDescriptionEnum = exports.Arcmw503ApplicationJsonErrorDescriptionEnum || (exports.Arcmw503ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw503ApplicationJson, _super);
    function Arcmw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw503ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Arcmw503ApplicationJson = Arcmw503ApplicationJson;
var Arcmw504ApplicationJsonErrorEnum;
(function (Arcmw504ApplicationJsonErrorEnum) {
    Arcmw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Arcmw504ApplicationJsonErrorEnum = exports.Arcmw504ApplicationJsonErrorEnum || (exports.Arcmw504ApplicationJsonErrorEnum = {}));
var Arcmw504ApplicationJsonErrorDescriptionEnum;
(function (Arcmw504ApplicationJsonErrorDescriptionEnum) {
    Arcmw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Arcmw504ApplicationJsonErrorDescriptionEnum = exports.Arcmw504ApplicationJsonErrorDescriptionEnum || (exports.Arcmw504ApplicationJsonErrorDescriptionEnum = {}));
var Arcmw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Arcmw504ApplicationJson, _super);
    function Arcmw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Arcmw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Arcmw504ApplicationJson.prototype, "errorDescription", void 0);
    return Arcmw504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Arcmw504ApplicationJson = Arcmw504ApplicationJson;
var ArcmwRequest = /** @class */ (function (_super) {
    __extends(ArcmwRequest, _super);
    function ArcmwRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ArcmwRequestBody)
    ], ArcmwRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ArcmwSecurity)
    ], ArcmwRequest.prototype, "security", void 0);
    return ArcmwRequest;
}(utils_1.SpeakeasyBase));
exports.ArcmwRequest = ArcmwRequest;
var ArcmwResponse = /** @class */ (function (_super) {
    __extends(ArcmwResponse, _super);
    function ArcmwResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ArcmwResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ArcmwResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Arcmw400ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Arcmw401ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Arcmw404ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Arcmw500ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Arcmw502ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Arcmw503ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Arcmw504ApplicationJson)
    ], ArcmwResponse.prototype, "arcmw504ApplicationJSONObject", void 0);
    return ArcmwResponse;
}(utils_1.SpeakeasyBase));
exports.ArcmwResponse = ArcmwResponse;
