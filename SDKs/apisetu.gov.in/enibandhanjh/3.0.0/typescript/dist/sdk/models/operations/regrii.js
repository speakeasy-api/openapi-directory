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
exports.RegriiResponse = exports.RegriiRequest = exports.Regrii504ApplicationJson = exports.Regrii504ApplicationJsonErrorDescriptionEnum = exports.Regrii504ApplicationJsonErrorEnum = exports.Regrii503ApplicationJson = exports.Regrii503ApplicationJsonErrorDescriptionEnum = exports.Regrii503ApplicationJsonErrorEnum = exports.Regrii502ApplicationJson = exports.Regrii502ApplicationJsonErrorDescriptionEnum = exports.Regrii502ApplicationJsonErrorEnum = exports.Regrii500ApplicationJson = exports.Regrii500ApplicationJsonErrorDescriptionEnum = exports.Regrii500ApplicationJsonErrorEnum = exports.Regrii404ApplicationJson = exports.Regrii404ApplicationJsonErrorDescriptionEnum = exports.Regrii404ApplicationJsonErrorEnum = exports.Regrii401ApplicationJson = exports.Regrii401ApplicationJsonErrorDescriptionEnum = exports.Regrii401ApplicationJsonErrorEnum = exports.Regrii400ApplicationJson = exports.Regrii400ApplicationJsonErrorDescriptionEnum = exports.Regrii400ApplicationJsonErrorEnum = exports.RegriiSecurity = exports.RegriiRequestBody = exports.RegriiRequestBodyFormatEnum = exports.RegriiRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RegriiRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RegriiRequestBodyCertificateParameters, _super);
    function RegriiRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RegriiRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regno" }),
        __metadata("design:type", String)
    ], RegriiRequestBodyCertificateParameters.prototype, "regno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sro_id" }),
        __metadata("design:type", String)
    ], RegriiRequestBodyCertificateParameters.prototype, "sroId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=yr" }),
        __metadata("design:type", String)
    ], RegriiRequestBodyCertificateParameters.prototype, "yr", void 0);
    return RegriiRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RegriiRequestBodyCertificateParameters = RegriiRequestBodyCertificateParameters;
var RegriiRequestBodyFormatEnum;
(function (RegriiRequestBodyFormatEnum) {
    RegriiRequestBodyFormatEnum["Pdf"] = "pdf";
})(RegriiRequestBodyFormatEnum = exports.RegriiRequestBodyFormatEnum || (exports.RegriiRequestBodyFormatEnum = {}));
var RegriiRequestBody = /** @class */ (function (_super) {
    __extends(RegriiRequestBody, _super);
    function RegriiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RegriiRequestBodyCertificateParameters)
    ], RegriiRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RegriiRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RegriiRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RegriiRequestBody.prototype, "txnId", void 0);
    return RegriiRequestBody;
}(utils_1.SpeakeasyBase));
exports.RegriiRequestBody = RegriiRequestBody;
var RegriiSecurity = /** @class */ (function (_super) {
    __extends(RegriiSecurity, _super);
    function RegriiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RegriiSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RegriiSecurity.prototype, "clientId", void 0);
    return RegriiSecurity;
}(utils_1.SpeakeasyBase));
exports.RegriiSecurity = RegriiSecurity;
var Regrii400ApplicationJsonErrorEnum;
(function (Regrii400ApplicationJsonErrorEnum) {
    Regrii400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Regrii400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Regrii400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Regrii400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Regrii400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Regrii400ApplicationJsonErrorEnum = exports.Regrii400ApplicationJsonErrorEnum || (exports.Regrii400ApplicationJsonErrorEnum = {}));
var Regrii400ApplicationJsonErrorDescriptionEnum;
(function (Regrii400ApplicationJsonErrorDescriptionEnum) {
    Regrii400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Regrii400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Regrii400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Regrii400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Regrii400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Regrii400ApplicationJsonErrorDescriptionEnum = exports.Regrii400ApplicationJsonErrorDescriptionEnum || (exports.Regrii400ApplicationJsonErrorDescriptionEnum = {}));
var Regrii400ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii400ApplicationJson, _super);
    function Regrii400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii400ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Regrii400ApplicationJson = Regrii400ApplicationJson;
var Regrii401ApplicationJsonErrorEnum;
(function (Regrii401ApplicationJsonErrorEnum) {
    Regrii401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Regrii401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Regrii401ApplicationJsonErrorEnum = exports.Regrii401ApplicationJsonErrorEnum || (exports.Regrii401ApplicationJsonErrorEnum = {}));
var Regrii401ApplicationJsonErrorDescriptionEnum;
(function (Regrii401ApplicationJsonErrorDescriptionEnum) {
    Regrii401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Regrii401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Regrii401ApplicationJsonErrorDescriptionEnum = exports.Regrii401ApplicationJsonErrorDescriptionEnum || (exports.Regrii401ApplicationJsonErrorDescriptionEnum = {}));
var Regrii401ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii401ApplicationJson, _super);
    function Regrii401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii401ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Regrii401ApplicationJson = Regrii401ApplicationJson;
var Regrii404ApplicationJsonErrorEnum;
(function (Regrii404ApplicationJsonErrorEnum) {
    Regrii404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Regrii404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Regrii404ApplicationJsonErrorEnum = exports.Regrii404ApplicationJsonErrorEnum || (exports.Regrii404ApplicationJsonErrorEnum = {}));
var Regrii404ApplicationJsonErrorDescriptionEnum;
(function (Regrii404ApplicationJsonErrorDescriptionEnum) {
    Regrii404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Regrii404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Regrii404ApplicationJsonErrorDescriptionEnum = exports.Regrii404ApplicationJsonErrorDescriptionEnum || (exports.Regrii404ApplicationJsonErrorDescriptionEnum = {}));
var Regrii404ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii404ApplicationJson, _super);
    function Regrii404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii404ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Regrii404ApplicationJson = Regrii404ApplicationJson;
var Regrii500ApplicationJsonErrorEnum;
(function (Regrii500ApplicationJsonErrorEnum) {
    Regrii500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Regrii500ApplicationJsonErrorEnum = exports.Regrii500ApplicationJsonErrorEnum || (exports.Regrii500ApplicationJsonErrorEnum = {}));
var Regrii500ApplicationJsonErrorDescriptionEnum;
(function (Regrii500ApplicationJsonErrorDescriptionEnum) {
    Regrii500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Regrii500ApplicationJsonErrorDescriptionEnum = exports.Regrii500ApplicationJsonErrorDescriptionEnum || (exports.Regrii500ApplicationJsonErrorDescriptionEnum = {}));
var Regrii500ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii500ApplicationJson, _super);
    function Regrii500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii500ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Regrii500ApplicationJson = Regrii500ApplicationJson;
var Regrii502ApplicationJsonErrorEnum;
(function (Regrii502ApplicationJsonErrorEnum) {
    Regrii502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Regrii502ApplicationJsonErrorEnum = exports.Regrii502ApplicationJsonErrorEnum || (exports.Regrii502ApplicationJsonErrorEnum = {}));
var Regrii502ApplicationJsonErrorDescriptionEnum;
(function (Regrii502ApplicationJsonErrorDescriptionEnum) {
    Regrii502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Regrii502ApplicationJsonErrorDescriptionEnum = exports.Regrii502ApplicationJsonErrorDescriptionEnum || (exports.Regrii502ApplicationJsonErrorDescriptionEnum = {}));
var Regrii502ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii502ApplicationJson, _super);
    function Regrii502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii502ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Regrii502ApplicationJson = Regrii502ApplicationJson;
var Regrii503ApplicationJsonErrorEnum;
(function (Regrii503ApplicationJsonErrorEnum) {
    Regrii503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Regrii503ApplicationJsonErrorEnum = exports.Regrii503ApplicationJsonErrorEnum || (exports.Regrii503ApplicationJsonErrorEnum = {}));
var Regrii503ApplicationJsonErrorDescriptionEnum;
(function (Regrii503ApplicationJsonErrorDescriptionEnum) {
    Regrii503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Regrii503ApplicationJsonErrorDescriptionEnum = exports.Regrii503ApplicationJsonErrorDescriptionEnum || (exports.Regrii503ApplicationJsonErrorDescriptionEnum = {}));
var Regrii503ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii503ApplicationJson, _super);
    function Regrii503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii503ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Regrii503ApplicationJson = Regrii503ApplicationJson;
var Regrii504ApplicationJsonErrorEnum;
(function (Regrii504ApplicationJsonErrorEnum) {
    Regrii504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Regrii504ApplicationJsonErrorEnum = exports.Regrii504ApplicationJsonErrorEnum || (exports.Regrii504ApplicationJsonErrorEnum = {}));
var Regrii504ApplicationJsonErrorDescriptionEnum;
(function (Regrii504ApplicationJsonErrorDescriptionEnum) {
    Regrii504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Regrii504ApplicationJsonErrorDescriptionEnum = exports.Regrii504ApplicationJsonErrorDescriptionEnum || (exports.Regrii504ApplicationJsonErrorDescriptionEnum = {}));
var Regrii504ApplicationJson = /** @class */ (function (_super) {
    __extends(Regrii504ApplicationJson, _super);
    function Regrii504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Regrii504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Regrii504ApplicationJson.prototype, "errorDescription", void 0);
    return Regrii504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Regrii504ApplicationJson = Regrii504ApplicationJson;
var RegriiRequest = /** @class */ (function (_super) {
    __extends(RegriiRequest, _super);
    function RegriiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RegriiRequestBody)
    ], RegriiRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RegriiSecurity)
    ], RegriiRequest.prototype, "security", void 0);
    return RegriiRequest;
}(utils_1.SpeakeasyBase));
exports.RegriiRequest = RegriiRequest;
var RegriiResponse = /** @class */ (function (_super) {
    __extends(RegriiResponse, _super);
    function RegriiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RegriiResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RegriiResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Regrii400ApplicationJson)
    ], RegriiResponse.prototype, "regrii400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Regrii401ApplicationJson)
    ], RegriiResponse.prototype, "regrii401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Regrii404ApplicationJson)
    ], RegriiResponse.prototype, "regrii404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Regrii500ApplicationJson)
    ], RegriiResponse.prototype, "regrii500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Regrii502ApplicationJson)
    ], RegriiResponse.prototype, "regrii502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Regrii503ApplicationJson)
    ], RegriiResponse.prototype, "regrii503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Regrii504ApplicationJson)
    ], RegriiResponse.prototype, "regrii504ApplicationJSONObject", void 0);
    return RegriiResponse;
}(utils_1.SpeakeasyBase));
exports.RegriiResponse = RegriiResponse;
