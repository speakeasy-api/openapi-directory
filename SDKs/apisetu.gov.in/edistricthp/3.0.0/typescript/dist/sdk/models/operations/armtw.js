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
exports.ArmtwResponse = exports.ArmtwRequest = exports.Armtw504ApplicationJson = exports.Armtw504ApplicationJsonErrorDescriptionEnum = exports.Armtw504ApplicationJsonErrorEnum = exports.Armtw503ApplicationJson = exports.Armtw503ApplicationJsonErrorDescriptionEnum = exports.Armtw503ApplicationJsonErrorEnum = exports.Armtw502ApplicationJson = exports.Armtw502ApplicationJsonErrorDescriptionEnum = exports.Armtw502ApplicationJsonErrorEnum = exports.Armtw500ApplicationJson = exports.Armtw500ApplicationJsonErrorDescriptionEnum = exports.Armtw500ApplicationJsonErrorEnum = exports.Armtw404ApplicationJson = exports.Armtw404ApplicationJsonErrorDescriptionEnum = exports.Armtw404ApplicationJsonErrorEnum = exports.Armtw401ApplicationJson = exports.Armtw401ApplicationJsonErrorDescriptionEnum = exports.Armtw401ApplicationJsonErrorEnum = exports.Armtw400ApplicationJson = exports.Armtw400ApplicationJsonErrorDescriptionEnum = exports.Armtw400ApplicationJsonErrorEnum = exports.ArmtwSecurity = exports.ArmtwRequestBody = exports.ArmtwRequestBodyFormatEnum = exports.ArmtwRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ArmtwRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ArmtwRequestBodyCertificateParameters, _super);
    function ArmtwRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], ArmtwRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return ArmtwRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.ArmtwRequestBodyCertificateParameters = ArmtwRequestBodyCertificateParameters;
var ArmtwRequestBodyFormatEnum;
(function (ArmtwRequestBodyFormatEnum) {
    ArmtwRequestBodyFormatEnum["Pdf"] = "pdf";
})(ArmtwRequestBodyFormatEnum = exports.ArmtwRequestBodyFormatEnum || (exports.ArmtwRequestBodyFormatEnum = {}));
var ArmtwRequestBody = /** @class */ (function (_super) {
    __extends(ArmtwRequestBody, _super);
    function ArmtwRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ArmtwRequestBodyCertificateParameters)
    ], ArmtwRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ArmtwRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ArmtwRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ArmtwRequestBody.prototype, "txnId", void 0);
    return ArmtwRequestBody;
}(utils_1.SpeakeasyBase));
exports.ArmtwRequestBody = ArmtwRequestBody;
var ArmtwSecurity = /** @class */ (function (_super) {
    __extends(ArmtwSecurity, _super);
    function ArmtwSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ArmtwSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ArmtwSecurity.prototype, "clientId", void 0);
    return ArmtwSecurity;
}(utils_1.SpeakeasyBase));
exports.ArmtwSecurity = ArmtwSecurity;
var Armtw400ApplicationJsonErrorEnum;
(function (Armtw400ApplicationJsonErrorEnum) {
    Armtw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Armtw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Armtw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Armtw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Armtw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Armtw400ApplicationJsonErrorEnum = exports.Armtw400ApplicationJsonErrorEnum || (exports.Armtw400ApplicationJsonErrorEnum = {}));
var Armtw400ApplicationJsonErrorDescriptionEnum;
(function (Armtw400ApplicationJsonErrorDescriptionEnum) {
    Armtw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Armtw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Armtw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Armtw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Armtw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Armtw400ApplicationJsonErrorDescriptionEnum = exports.Armtw400ApplicationJsonErrorDescriptionEnum || (exports.Armtw400ApplicationJsonErrorDescriptionEnum = {}));
var Armtw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw400ApplicationJson, _super);
    function Armtw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw400ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Armtw400ApplicationJson = Armtw400ApplicationJson;
var Armtw401ApplicationJsonErrorEnum;
(function (Armtw401ApplicationJsonErrorEnum) {
    Armtw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Armtw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Armtw401ApplicationJsonErrorEnum = exports.Armtw401ApplicationJsonErrorEnum || (exports.Armtw401ApplicationJsonErrorEnum = {}));
var Armtw401ApplicationJsonErrorDescriptionEnum;
(function (Armtw401ApplicationJsonErrorDescriptionEnum) {
    Armtw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Armtw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Armtw401ApplicationJsonErrorDescriptionEnum = exports.Armtw401ApplicationJsonErrorDescriptionEnum || (exports.Armtw401ApplicationJsonErrorDescriptionEnum = {}));
var Armtw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw401ApplicationJson, _super);
    function Armtw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw401ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Armtw401ApplicationJson = Armtw401ApplicationJson;
var Armtw404ApplicationJsonErrorEnum;
(function (Armtw404ApplicationJsonErrorEnum) {
    Armtw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Armtw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Armtw404ApplicationJsonErrorEnum = exports.Armtw404ApplicationJsonErrorEnum || (exports.Armtw404ApplicationJsonErrorEnum = {}));
var Armtw404ApplicationJsonErrorDescriptionEnum;
(function (Armtw404ApplicationJsonErrorDescriptionEnum) {
    Armtw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Armtw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Armtw404ApplicationJsonErrorDescriptionEnum = exports.Armtw404ApplicationJsonErrorDescriptionEnum || (exports.Armtw404ApplicationJsonErrorDescriptionEnum = {}));
var Armtw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw404ApplicationJson, _super);
    function Armtw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw404ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Armtw404ApplicationJson = Armtw404ApplicationJson;
var Armtw500ApplicationJsonErrorEnum;
(function (Armtw500ApplicationJsonErrorEnum) {
    Armtw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Armtw500ApplicationJsonErrorEnum = exports.Armtw500ApplicationJsonErrorEnum || (exports.Armtw500ApplicationJsonErrorEnum = {}));
var Armtw500ApplicationJsonErrorDescriptionEnum;
(function (Armtw500ApplicationJsonErrorDescriptionEnum) {
    Armtw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Armtw500ApplicationJsonErrorDescriptionEnum = exports.Armtw500ApplicationJsonErrorDescriptionEnum || (exports.Armtw500ApplicationJsonErrorDescriptionEnum = {}));
var Armtw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw500ApplicationJson, _super);
    function Armtw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw500ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Armtw500ApplicationJson = Armtw500ApplicationJson;
var Armtw502ApplicationJsonErrorEnum;
(function (Armtw502ApplicationJsonErrorEnum) {
    Armtw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Armtw502ApplicationJsonErrorEnum = exports.Armtw502ApplicationJsonErrorEnum || (exports.Armtw502ApplicationJsonErrorEnum = {}));
var Armtw502ApplicationJsonErrorDescriptionEnum;
(function (Armtw502ApplicationJsonErrorDescriptionEnum) {
    Armtw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Armtw502ApplicationJsonErrorDescriptionEnum = exports.Armtw502ApplicationJsonErrorDescriptionEnum || (exports.Armtw502ApplicationJsonErrorDescriptionEnum = {}));
var Armtw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw502ApplicationJson, _super);
    function Armtw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw502ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Armtw502ApplicationJson = Armtw502ApplicationJson;
var Armtw503ApplicationJsonErrorEnum;
(function (Armtw503ApplicationJsonErrorEnum) {
    Armtw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Armtw503ApplicationJsonErrorEnum = exports.Armtw503ApplicationJsonErrorEnum || (exports.Armtw503ApplicationJsonErrorEnum = {}));
var Armtw503ApplicationJsonErrorDescriptionEnum;
(function (Armtw503ApplicationJsonErrorDescriptionEnum) {
    Armtw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Armtw503ApplicationJsonErrorDescriptionEnum = exports.Armtw503ApplicationJsonErrorDescriptionEnum || (exports.Armtw503ApplicationJsonErrorDescriptionEnum = {}));
var Armtw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw503ApplicationJson, _super);
    function Armtw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw503ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Armtw503ApplicationJson = Armtw503ApplicationJson;
var Armtw504ApplicationJsonErrorEnum;
(function (Armtw504ApplicationJsonErrorEnum) {
    Armtw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Armtw504ApplicationJsonErrorEnum = exports.Armtw504ApplicationJsonErrorEnum || (exports.Armtw504ApplicationJsonErrorEnum = {}));
var Armtw504ApplicationJsonErrorDescriptionEnum;
(function (Armtw504ApplicationJsonErrorDescriptionEnum) {
    Armtw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Armtw504ApplicationJsonErrorDescriptionEnum = exports.Armtw504ApplicationJsonErrorDescriptionEnum || (exports.Armtw504ApplicationJsonErrorDescriptionEnum = {}));
var Armtw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Armtw504ApplicationJson, _super);
    function Armtw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Armtw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Armtw504ApplicationJson.prototype, "errorDescription", void 0);
    return Armtw504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Armtw504ApplicationJson = Armtw504ApplicationJson;
var ArmtwRequest = /** @class */ (function (_super) {
    __extends(ArmtwRequest, _super);
    function ArmtwRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ArmtwRequestBody)
    ], ArmtwRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ArmtwSecurity)
    ], ArmtwRequest.prototype, "security", void 0);
    return ArmtwRequest;
}(utils_1.SpeakeasyBase));
exports.ArmtwRequest = ArmtwRequest;
var ArmtwResponse = /** @class */ (function (_super) {
    __extends(ArmtwResponse, _super);
    function ArmtwResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ArmtwResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ArmtwResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Armtw400ApplicationJson)
    ], ArmtwResponse.prototype, "armtw400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Armtw401ApplicationJson)
    ], ArmtwResponse.prototype, "armtw401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Armtw404ApplicationJson)
    ], ArmtwResponse.prototype, "armtw404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Armtw500ApplicationJson)
    ], ArmtwResponse.prototype, "armtw500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Armtw502ApplicationJson)
    ], ArmtwResponse.prototype, "armtw502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Armtw503ApplicationJson)
    ], ArmtwResponse.prototype, "armtw503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Armtw504ApplicationJson)
    ], ArmtwResponse.prototype, "armtw504ApplicationJSONObject", void 0);
    return ArmtwResponse;
}(utils_1.SpeakeasyBase));
exports.ArmtwResponse = ArmtwResponse;
