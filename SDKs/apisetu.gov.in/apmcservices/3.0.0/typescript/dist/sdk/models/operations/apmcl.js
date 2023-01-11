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
exports.ApmclResponse = exports.ApmclRequest = exports.Apmcl504ApplicationJson = exports.Apmcl504ApplicationJsonErrorDescriptionEnum = exports.Apmcl504ApplicationJsonErrorEnum = exports.Apmcl503ApplicationJson = exports.Apmcl503ApplicationJsonErrorDescriptionEnum = exports.Apmcl503ApplicationJsonErrorEnum = exports.Apmcl502ApplicationJson = exports.Apmcl502ApplicationJsonErrorDescriptionEnum = exports.Apmcl502ApplicationJsonErrorEnum = exports.Apmcl500ApplicationJson = exports.Apmcl500ApplicationJsonErrorDescriptionEnum = exports.Apmcl500ApplicationJsonErrorEnum = exports.Apmcl404ApplicationJson = exports.Apmcl404ApplicationJsonErrorDescriptionEnum = exports.Apmcl404ApplicationJsonErrorEnum = exports.Apmcl401ApplicationJson = exports.Apmcl401ApplicationJsonErrorDescriptionEnum = exports.Apmcl401ApplicationJsonErrorEnum = exports.Apmcl400ApplicationJson = exports.Apmcl400ApplicationJsonErrorDescriptionEnum = exports.Apmcl400ApplicationJsonErrorEnum = exports.ApmclSecurity = exports.ApmclRequestBody = exports.ApmclRequestBodyFormatEnum = exports.ApmclRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ApmclRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ApmclRequestBodyCertificateParameters, _super);
    function ApmclRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], ApmclRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return ApmclRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.ApmclRequestBodyCertificateParameters = ApmclRequestBodyCertificateParameters;
var ApmclRequestBodyFormatEnum;
(function (ApmclRequestBodyFormatEnum) {
    ApmclRequestBodyFormatEnum["Pdf"] = "pdf";
})(ApmclRequestBodyFormatEnum = exports.ApmclRequestBodyFormatEnum || (exports.ApmclRequestBodyFormatEnum = {}));
var ApmclRequestBody = /** @class */ (function (_super) {
    __extends(ApmclRequestBody, _super);
    function ApmclRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ApmclRequestBodyCertificateParameters)
    ], ApmclRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ApmclRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ApmclRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ApmclRequestBody.prototype, "txnId", void 0);
    return ApmclRequestBody;
}(utils_1.SpeakeasyBase));
exports.ApmclRequestBody = ApmclRequestBody;
var ApmclSecurity = /** @class */ (function (_super) {
    __extends(ApmclSecurity, _super);
    function ApmclSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ApmclSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ApmclSecurity.prototype, "clientId", void 0);
    return ApmclSecurity;
}(utils_1.SpeakeasyBase));
exports.ApmclSecurity = ApmclSecurity;
var Apmcl400ApplicationJsonErrorEnum;
(function (Apmcl400ApplicationJsonErrorEnum) {
    Apmcl400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Apmcl400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Apmcl400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Apmcl400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Apmcl400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Apmcl400ApplicationJsonErrorEnum = exports.Apmcl400ApplicationJsonErrorEnum || (exports.Apmcl400ApplicationJsonErrorEnum = {}));
var Apmcl400ApplicationJsonErrorDescriptionEnum;
(function (Apmcl400ApplicationJsonErrorDescriptionEnum) {
    Apmcl400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Apmcl400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Apmcl400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Apmcl400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Apmcl400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Apmcl400ApplicationJsonErrorDescriptionEnum = exports.Apmcl400ApplicationJsonErrorDescriptionEnum || (exports.Apmcl400ApplicationJsonErrorDescriptionEnum = {}));
var Apmcl400ApplicationJson = /** @class */ (function (_super) {
    __extends(Apmcl400ApplicationJson, _super);
    function Apmcl400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apmcl400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apmcl400ApplicationJson.prototype, "errorDescription", void 0);
    return Apmcl400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Apmcl400ApplicationJson = Apmcl400ApplicationJson;
var Apmcl401ApplicationJsonErrorEnum;
(function (Apmcl401ApplicationJsonErrorEnum) {
    Apmcl401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Apmcl401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Apmcl401ApplicationJsonErrorEnum = exports.Apmcl401ApplicationJsonErrorEnum || (exports.Apmcl401ApplicationJsonErrorEnum = {}));
var Apmcl401ApplicationJsonErrorDescriptionEnum;
(function (Apmcl401ApplicationJsonErrorDescriptionEnum) {
    Apmcl401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Apmcl401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Apmcl401ApplicationJsonErrorDescriptionEnum = exports.Apmcl401ApplicationJsonErrorDescriptionEnum || (exports.Apmcl401ApplicationJsonErrorDescriptionEnum = {}));
var Apmcl401ApplicationJson = /** @class */ (function (_super) {
    __extends(Apmcl401ApplicationJson, _super);
    function Apmcl401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apmcl401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apmcl401ApplicationJson.prototype, "errorDescription", void 0);
    return Apmcl401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Apmcl401ApplicationJson = Apmcl401ApplicationJson;
var Apmcl404ApplicationJsonErrorEnum;
(function (Apmcl404ApplicationJsonErrorEnum) {
    Apmcl404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Apmcl404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Apmcl404ApplicationJsonErrorEnum = exports.Apmcl404ApplicationJsonErrorEnum || (exports.Apmcl404ApplicationJsonErrorEnum = {}));
var Apmcl404ApplicationJsonErrorDescriptionEnum;
(function (Apmcl404ApplicationJsonErrorDescriptionEnum) {
    Apmcl404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Apmcl404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Apmcl404ApplicationJsonErrorDescriptionEnum = exports.Apmcl404ApplicationJsonErrorDescriptionEnum || (exports.Apmcl404ApplicationJsonErrorDescriptionEnum = {}));
var Apmcl404ApplicationJson = /** @class */ (function (_super) {
    __extends(Apmcl404ApplicationJson, _super);
    function Apmcl404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apmcl404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apmcl404ApplicationJson.prototype, "errorDescription", void 0);
    return Apmcl404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Apmcl404ApplicationJson = Apmcl404ApplicationJson;
var Apmcl500ApplicationJsonErrorEnum;
(function (Apmcl500ApplicationJsonErrorEnum) {
    Apmcl500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Apmcl500ApplicationJsonErrorEnum = exports.Apmcl500ApplicationJsonErrorEnum || (exports.Apmcl500ApplicationJsonErrorEnum = {}));
var Apmcl500ApplicationJsonErrorDescriptionEnum;
(function (Apmcl500ApplicationJsonErrorDescriptionEnum) {
    Apmcl500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Apmcl500ApplicationJsonErrorDescriptionEnum = exports.Apmcl500ApplicationJsonErrorDescriptionEnum || (exports.Apmcl500ApplicationJsonErrorDescriptionEnum = {}));
var Apmcl500ApplicationJson = /** @class */ (function (_super) {
    __extends(Apmcl500ApplicationJson, _super);
    function Apmcl500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apmcl500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apmcl500ApplicationJson.prototype, "errorDescription", void 0);
    return Apmcl500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Apmcl500ApplicationJson = Apmcl500ApplicationJson;
var Apmcl502ApplicationJsonErrorEnum;
(function (Apmcl502ApplicationJsonErrorEnum) {
    Apmcl502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Apmcl502ApplicationJsonErrorEnum = exports.Apmcl502ApplicationJsonErrorEnum || (exports.Apmcl502ApplicationJsonErrorEnum = {}));
var Apmcl502ApplicationJsonErrorDescriptionEnum;
(function (Apmcl502ApplicationJsonErrorDescriptionEnum) {
    Apmcl502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Apmcl502ApplicationJsonErrorDescriptionEnum = exports.Apmcl502ApplicationJsonErrorDescriptionEnum || (exports.Apmcl502ApplicationJsonErrorDescriptionEnum = {}));
var Apmcl502ApplicationJson = /** @class */ (function (_super) {
    __extends(Apmcl502ApplicationJson, _super);
    function Apmcl502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apmcl502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apmcl502ApplicationJson.prototype, "errorDescription", void 0);
    return Apmcl502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Apmcl502ApplicationJson = Apmcl502ApplicationJson;
var Apmcl503ApplicationJsonErrorEnum;
(function (Apmcl503ApplicationJsonErrorEnum) {
    Apmcl503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Apmcl503ApplicationJsonErrorEnum = exports.Apmcl503ApplicationJsonErrorEnum || (exports.Apmcl503ApplicationJsonErrorEnum = {}));
var Apmcl503ApplicationJsonErrorDescriptionEnum;
(function (Apmcl503ApplicationJsonErrorDescriptionEnum) {
    Apmcl503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Apmcl503ApplicationJsonErrorDescriptionEnum = exports.Apmcl503ApplicationJsonErrorDescriptionEnum || (exports.Apmcl503ApplicationJsonErrorDescriptionEnum = {}));
var Apmcl503ApplicationJson = /** @class */ (function (_super) {
    __extends(Apmcl503ApplicationJson, _super);
    function Apmcl503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apmcl503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apmcl503ApplicationJson.prototype, "errorDescription", void 0);
    return Apmcl503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Apmcl503ApplicationJson = Apmcl503ApplicationJson;
var Apmcl504ApplicationJsonErrorEnum;
(function (Apmcl504ApplicationJsonErrorEnum) {
    Apmcl504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Apmcl504ApplicationJsonErrorEnum = exports.Apmcl504ApplicationJsonErrorEnum || (exports.Apmcl504ApplicationJsonErrorEnum = {}));
var Apmcl504ApplicationJsonErrorDescriptionEnum;
(function (Apmcl504ApplicationJsonErrorDescriptionEnum) {
    Apmcl504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Apmcl504ApplicationJsonErrorDescriptionEnum = exports.Apmcl504ApplicationJsonErrorDescriptionEnum || (exports.Apmcl504ApplicationJsonErrorDescriptionEnum = {}));
var Apmcl504ApplicationJson = /** @class */ (function (_super) {
    __extends(Apmcl504ApplicationJson, _super);
    function Apmcl504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Apmcl504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Apmcl504ApplicationJson.prototype, "errorDescription", void 0);
    return Apmcl504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Apmcl504ApplicationJson = Apmcl504ApplicationJson;
var ApmclRequest = /** @class */ (function (_super) {
    __extends(ApmclRequest, _super);
    function ApmclRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ApmclRequestBody)
    ], ApmclRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApmclSecurity)
    ], ApmclRequest.prototype, "security", void 0);
    return ApmclRequest;
}(utils_1.SpeakeasyBase));
exports.ApmclRequest = ApmclRequest;
var ApmclResponse = /** @class */ (function (_super) {
    __extends(ApmclResponse, _super);
    function ApmclResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ApmclResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ApmclResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Apmcl400ApplicationJson)
    ], ApmclResponse.prototype, "apmcl400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Apmcl401ApplicationJson)
    ], ApmclResponse.prototype, "apmcl401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Apmcl404ApplicationJson)
    ], ApmclResponse.prototype, "apmcl404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Apmcl500ApplicationJson)
    ], ApmclResponse.prototype, "apmcl500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Apmcl502ApplicationJson)
    ], ApmclResponse.prototype, "apmcl502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Apmcl503ApplicationJson)
    ], ApmclResponse.prototype, "apmcl503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Apmcl504ApplicationJson)
    ], ApmclResponse.prototype, "apmcl504ApplicationJSONObject", void 0);
    return ApmclResponse;
}(utils_1.SpeakeasyBase));
exports.ApmclResponse = ApmclResponse;
