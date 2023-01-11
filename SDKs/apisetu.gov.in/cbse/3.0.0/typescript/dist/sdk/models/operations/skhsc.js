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
exports.SkhscResponse = exports.SkhscRequest = exports.Skhsc504ApplicationJson = exports.Skhsc504ApplicationJsonErrorDescriptionEnum = exports.Skhsc504ApplicationJsonErrorEnum = exports.Skhsc503ApplicationJson = exports.Skhsc503ApplicationJsonErrorDescriptionEnum = exports.Skhsc503ApplicationJsonErrorEnum = exports.Skhsc502ApplicationJson = exports.Skhsc502ApplicationJsonErrorDescriptionEnum = exports.Skhsc502ApplicationJsonErrorEnum = exports.Skhsc500ApplicationJson = exports.Skhsc500ApplicationJsonErrorDescriptionEnum = exports.Skhsc500ApplicationJsonErrorEnum = exports.Skhsc404ApplicationJson = exports.Skhsc404ApplicationJsonErrorDescriptionEnum = exports.Skhsc404ApplicationJsonErrorEnum = exports.Skhsc401ApplicationJson = exports.Skhsc401ApplicationJsonErrorDescriptionEnum = exports.Skhsc401ApplicationJsonErrorEnum = exports.Skhsc400ApplicationJson = exports.Skhsc400ApplicationJsonErrorDescriptionEnum = exports.Skhsc400ApplicationJsonErrorEnum = exports.SkhscSecurity = exports.SkhscRequestBody = exports.SkhscRequestBodyFormatEnum = exports.SkhscRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SkhscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SkhscRequestBodyCertificateParameters, _super);
    function SkhscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SkhscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], SkhscRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], SkhscRequestBodyCertificateParameters.prototype, "year", void 0);
    return SkhscRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SkhscRequestBodyCertificateParameters = SkhscRequestBodyCertificateParameters;
var SkhscRequestBodyFormatEnum;
(function (SkhscRequestBodyFormatEnum) {
    SkhscRequestBodyFormatEnum["Pdf"] = "pdf";
})(SkhscRequestBodyFormatEnum = exports.SkhscRequestBodyFormatEnum || (exports.SkhscRequestBodyFormatEnum = {}));
var SkhscRequestBody = /** @class */ (function (_super) {
    __extends(SkhscRequestBody, _super);
    function SkhscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SkhscRequestBodyCertificateParameters)
    ], SkhscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SkhscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SkhscRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SkhscRequestBody.prototype, "txnId", void 0);
    return SkhscRequestBody;
}(utils_1.SpeakeasyBase));
exports.SkhscRequestBody = SkhscRequestBody;
var SkhscSecurity = /** @class */ (function (_super) {
    __extends(SkhscSecurity, _super);
    function SkhscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SkhscSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SkhscSecurity.prototype, "clientId", void 0);
    return SkhscSecurity;
}(utils_1.SpeakeasyBase));
exports.SkhscSecurity = SkhscSecurity;
var Skhsc400ApplicationJsonErrorEnum;
(function (Skhsc400ApplicationJsonErrorEnum) {
    Skhsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Skhsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Skhsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Skhsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Skhsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Skhsc400ApplicationJsonErrorEnum = exports.Skhsc400ApplicationJsonErrorEnum || (exports.Skhsc400ApplicationJsonErrorEnum = {}));
var Skhsc400ApplicationJsonErrorDescriptionEnum;
(function (Skhsc400ApplicationJsonErrorDescriptionEnum) {
    Skhsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Skhsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Skhsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Skhsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Skhsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Skhsc400ApplicationJsonErrorDescriptionEnum = exports.Skhsc400ApplicationJsonErrorDescriptionEnum || (exports.Skhsc400ApplicationJsonErrorDescriptionEnum = {}));
var Skhsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Skhsc400ApplicationJson, _super);
    function Skhsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skhsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skhsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Skhsc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Skhsc400ApplicationJson = Skhsc400ApplicationJson;
var Skhsc401ApplicationJsonErrorEnum;
(function (Skhsc401ApplicationJsonErrorEnum) {
    Skhsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Skhsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Skhsc401ApplicationJsonErrorEnum = exports.Skhsc401ApplicationJsonErrorEnum || (exports.Skhsc401ApplicationJsonErrorEnum = {}));
var Skhsc401ApplicationJsonErrorDescriptionEnum;
(function (Skhsc401ApplicationJsonErrorDescriptionEnum) {
    Skhsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Skhsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Skhsc401ApplicationJsonErrorDescriptionEnum = exports.Skhsc401ApplicationJsonErrorDescriptionEnum || (exports.Skhsc401ApplicationJsonErrorDescriptionEnum = {}));
var Skhsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Skhsc401ApplicationJson, _super);
    function Skhsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skhsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skhsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Skhsc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Skhsc401ApplicationJson = Skhsc401ApplicationJson;
var Skhsc404ApplicationJsonErrorEnum;
(function (Skhsc404ApplicationJsonErrorEnum) {
    Skhsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Skhsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Skhsc404ApplicationJsonErrorEnum = exports.Skhsc404ApplicationJsonErrorEnum || (exports.Skhsc404ApplicationJsonErrorEnum = {}));
var Skhsc404ApplicationJsonErrorDescriptionEnum;
(function (Skhsc404ApplicationJsonErrorDescriptionEnum) {
    Skhsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Skhsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Skhsc404ApplicationJsonErrorDescriptionEnum = exports.Skhsc404ApplicationJsonErrorDescriptionEnum || (exports.Skhsc404ApplicationJsonErrorDescriptionEnum = {}));
var Skhsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Skhsc404ApplicationJson, _super);
    function Skhsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skhsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skhsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Skhsc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Skhsc404ApplicationJson = Skhsc404ApplicationJson;
var Skhsc500ApplicationJsonErrorEnum;
(function (Skhsc500ApplicationJsonErrorEnum) {
    Skhsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Skhsc500ApplicationJsonErrorEnum = exports.Skhsc500ApplicationJsonErrorEnum || (exports.Skhsc500ApplicationJsonErrorEnum = {}));
var Skhsc500ApplicationJsonErrorDescriptionEnum;
(function (Skhsc500ApplicationJsonErrorDescriptionEnum) {
    Skhsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Skhsc500ApplicationJsonErrorDescriptionEnum = exports.Skhsc500ApplicationJsonErrorDescriptionEnum || (exports.Skhsc500ApplicationJsonErrorDescriptionEnum = {}));
var Skhsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Skhsc500ApplicationJson, _super);
    function Skhsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skhsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skhsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Skhsc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Skhsc500ApplicationJson = Skhsc500ApplicationJson;
var Skhsc502ApplicationJsonErrorEnum;
(function (Skhsc502ApplicationJsonErrorEnum) {
    Skhsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Skhsc502ApplicationJsonErrorEnum = exports.Skhsc502ApplicationJsonErrorEnum || (exports.Skhsc502ApplicationJsonErrorEnum = {}));
var Skhsc502ApplicationJsonErrorDescriptionEnum;
(function (Skhsc502ApplicationJsonErrorDescriptionEnum) {
    Skhsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Skhsc502ApplicationJsonErrorDescriptionEnum = exports.Skhsc502ApplicationJsonErrorDescriptionEnum || (exports.Skhsc502ApplicationJsonErrorDescriptionEnum = {}));
var Skhsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Skhsc502ApplicationJson, _super);
    function Skhsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skhsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skhsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Skhsc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Skhsc502ApplicationJson = Skhsc502ApplicationJson;
var Skhsc503ApplicationJsonErrorEnum;
(function (Skhsc503ApplicationJsonErrorEnum) {
    Skhsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Skhsc503ApplicationJsonErrorEnum = exports.Skhsc503ApplicationJsonErrorEnum || (exports.Skhsc503ApplicationJsonErrorEnum = {}));
var Skhsc503ApplicationJsonErrorDescriptionEnum;
(function (Skhsc503ApplicationJsonErrorDescriptionEnum) {
    Skhsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Skhsc503ApplicationJsonErrorDescriptionEnum = exports.Skhsc503ApplicationJsonErrorDescriptionEnum || (exports.Skhsc503ApplicationJsonErrorDescriptionEnum = {}));
var Skhsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Skhsc503ApplicationJson, _super);
    function Skhsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skhsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skhsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Skhsc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Skhsc503ApplicationJson = Skhsc503ApplicationJson;
var Skhsc504ApplicationJsonErrorEnum;
(function (Skhsc504ApplicationJsonErrorEnum) {
    Skhsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Skhsc504ApplicationJsonErrorEnum = exports.Skhsc504ApplicationJsonErrorEnum || (exports.Skhsc504ApplicationJsonErrorEnum = {}));
var Skhsc504ApplicationJsonErrorDescriptionEnum;
(function (Skhsc504ApplicationJsonErrorDescriptionEnum) {
    Skhsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Skhsc504ApplicationJsonErrorDescriptionEnum = exports.Skhsc504ApplicationJsonErrorDescriptionEnum || (exports.Skhsc504ApplicationJsonErrorDescriptionEnum = {}));
var Skhsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Skhsc504ApplicationJson, _super);
    function Skhsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Skhsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Skhsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Skhsc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Skhsc504ApplicationJson = Skhsc504ApplicationJson;
var SkhscRequest = /** @class */ (function (_super) {
    __extends(SkhscRequest, _super);
    function SkhscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SkhscRequestBody)
    ], SkhscRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SkhscSecurity)
    ], SkhscRequest.prototype, "security", void 0);
    return SkhscRequest;
}(utils_1.SpeakeasyBase));
exports.SkhscRequest = SkhscRequest;
var SkhscResponse = /** @class */ (function (_super) {
    __extends(SkhscResponse, _super);
    function SkhscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SkhscResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SkhscResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Skhsc400ApplicationJson)
    ], SkhscResponse.prototype, "skhsc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Skhsc401ApplicationJson)
    ], SkhscResponse.prototype, "skhsc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Skhsc404ApplicationJson)
    ], SkhscResponse.prototype, "skhsc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Skhsc500ApplicationJson)
    ], SkhscResponse.prototype, "skhsc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Skhsc502ApplicationJson)
    ], SkhscResponse.prototype, "skhsc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Skhsc503ApplicationJson)
    ], SkhscResponse.prototype, "skhsc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Skhsc504ApplicationJson)
    ], SkhscResponse.prototype, "skhsc504ApplicationJSONObject", void 0);
    return SkhscResponse;
}(utils_1.SpeakeasyBase));
exports.SkhscResponse = SkhscResponse;
