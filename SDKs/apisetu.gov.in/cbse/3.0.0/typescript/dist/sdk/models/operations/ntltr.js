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
exports.NtltrResponse = exports.NtltrRequest = exports.Ntltr504ApplicationJson = exports.Ntltr504ApplicationJsonErrorDescriptionEnum = exports.Ntltr504ApplicationJsonErrorEnum = exports.Ntltr503ApplicationJson = exports.Ntltr503ApplicationJsonErrorDescriptionEnum = exports.Ntltr503ApplicationJsonErrorEnum = exports.Ntltr502ApplicationJson = exports.Ntltr502ApplicationJsonErrorDescriptionEnum = exports.Ntltr502ApplicationJsonErrorEnum = exports.Ntltr500ApplicationJson = exports.Ntltr500ApplicationJsonErrorDescriptionEnum = exports.Ntltr500ApplicationJsonErrorEnum = exports.Ntltr404ApplicationJson = exports.Ntltr404ApplicationJsonErrorDescriptionEnum = exports.Ntltr404ApplicationJsonErrorEnum = exports.Ntltr401ApplicationJson = exports.Ntltr401ApplicationJsonErrorDescriptionEnum = exports.Ntltr401ApplicationJsonErrorEnum = exports.Ntltr400ApplicationJson = exports.Ntltr400ApplicationJsonErrorDescriptionEnum = exports.Ntltr400ApplicationJsonErrorEnum = exports.NtltrSecurity = exports.NtltrRequestBody = exports.NtltrRequestBodyFormatEnum = exports.NtltrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NtltrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NtltrRequestBodyCertificateParameters, _super);
    function NtltrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NtltrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NtltrRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NtltrRequestBodyCertificateParameters.prototype, "year", void 0);
    return NtltrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.NtltrRequestBodyCertificateParameters = NtltrRequestBodyCertificateParameters;
var NtltrRequestBodyFormatEnum;
(function (NtltrRequestBodyFormatEnum) {
    NtltrRequestBodyFormatEnum["Pdf"] = "pdf";
})(NtltrRequestBodyFormatEnum = exports.NtltrRequestBodyFormatEnum || (exports.NtltrRequestBodyFormatEnum = {}));
var NtltrRequestBody = /** @class */ (function (_super) {
    __extends(NtltrRequestBody, _super);
    function NtltrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NtltrRequestBodyCertificateParameters)
    ], NtltrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NtltrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NtltrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NtltrRequestBody.prototype, "txnId", void 0);
    return NtltrRequestBody;
}(utils_1.SpeakeasyBase));
exports.NtltrRequestBody = NtltrRequestBody;
var NtltrSecurity = /** @class */ (function (_super) {
    __extends(NtltrSecurity, _super);
    function NtltrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NtltrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NtltrSecurity.prototype, "clientId", void 0);
    return NtltrSecurity;
}(utils_1.SpeakeasyBase));
exports.NtltrSecurity = NtltrSecurity;
var Ntltr400ApplicationJsonErrorEnum;
(function (Ntltr400ApplicationJsonErrorEnum) {
    Ntltr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ntltr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ntltr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ntltr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ntltr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ntltr400ApplicationJsonErrorEnum = exports.Ntltr400ApplicationJsonErrorEnum || (exports.Ntltr400ApplicationJsonErrorEnum = {}));
var Ntltr400ApplicationJsonErrorDescriptionEnum;
(function (Ntltr400ApplicationJsonErrorDescriptionEnum) {
    Ntltr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ntltr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ntltr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ntltr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ntltr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ntltr400ApplicationJsonErrorDescriptionEnum = exports.Ntltr400ApplicationJsonErrorDescriptionEnum || (exports.Ntltr400ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr400ApplicationJson, _super);
    function Ntltr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr400ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntltr400ApplicationJson = Ntltr400ApplicationJson;
var Ntltr401ApplicationJsonErrorEnum;
(function (Ntltr401ApplicationJsonErrorEnum) {
    Ntltr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ntltr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ntltr401ApplicationJsonErrorEnum = exports.Ntltr401ApplicationJsonErrorEnum || (exports.Ntltr401ApplicationJsonErrorEnum = {}));
var Ntltr401ApplicationJsonErrorDescriptionEnum;
(function (Ntltr401ApplicationJsonErrorDescriptionEnum) {
    Ntltr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ntltr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ntltr401ApplicationJsonErrorDescriptionEnum = exports.Ntltr401ApplicationJsonErrorDescriptionEnum || (exports.Ntltr401ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr401ApplicationJson, _super);
    function Ntltr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr401ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntltr401ApplicationJson = Ntltr401ApplicationJson;
var Ntltr404ApplicationJsonErrorEnum;
(function (Ntltr404ApplicationJsonErrorEnum) {
    Ntltr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ntltr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ntltr404ApplicationJsonErrorEnum = exports.Ntltr404ApplicationJsonErrorEnum || (exports.Ntltr404ApplicationJsonErrorEnum = {}));
var Ntltr404ApplicationJsonErrorDescriptionEnum;
(function (Ntltr404ApplicationJsonErrorDescriptionEnum) {
    Ntltr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ntltr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ntltr404ApplicationJsonErrorDescriptionEnum = exports.Ntltr404ApplicationJsonErrorDescriptionEnum || (exports.Ntltr404ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr404ApplicationJson, _super);
    function Ntltr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr404ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntltr404ApplicationJson = Ntltr404ApplicationJson;
var Ntltr500ApplicationJsonErrorEnum;
(function (Ntltr500ApplicationJsonErrorEnum) {
    Ntltr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ntltr500ApplicationJsonErrorEnum = exports.Ntltr500ApplicationJsonErrorEnum || (exports.Ntltr500ApplicationJsonErrorEnum = {}));
var Ntltr500ApplicationJsonErrorDescriptionEnum;
(function (Ntltr500ApplicationJsonErrorDescriptionEnum) {
    Ntltr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ntltr500ApplicationJsonErrorDescriptionEnum = exports.Ntltr500ApplicationJsonErrorDescriptionEnum || (exports.Ntltr500ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr500ApplicationJson, _super);
    function Ntltr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr500ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntltr500ApplicationJson = Ntltr500ApplicationJson;
var Ntltr502ApplicationJsonErrorEnum;
(function (Ntltr502ApplicationJsonErrorEnum) {
    Ntltr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ntltr502ApplicationJsonErrorEnum = exports.Ntltr502ApplicationJsonErrorEnum || (exports.Ntltr502ApplicationJsonErrorEnum = {}));
var Ntltr502ApplicationJsonErrorDescriptionEnum;
(function (Ntltr502ApplicationJsonErrorDescriptionEnum) {
    Ntltr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ntltr502ApplicationJsonErrorDescriptionEnum = exports.Ntltr502ApplicationJsonErrorDescriptionEnum || (exports.Ntltr502ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr502ApplicationJson, _super);
    function Ntltr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr502ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntltr502ApplicationJson = Ntltr502ApplicationJson;
var Ntltr503ApplicationJsonErrorEnum;
(function (Ntltr503ApplicationJsonErrorEnum) {
    Ntltr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ntltr503ApplicationJsonErrorEnum = exports.Ntltr503ApplicationJsonErrorEnum || (exports.Ntltr503ApplicationJsonErrorEnum = {}));
var Ntltr503ApplicationJsonErrorDescriptionEnum;
(function (Ntltr503ApplicationJsonErrorDescriptionEnum) {
    Ntltr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ntltr503ApplicationJsonErrorDescriptionEnum = exports.Ntltr503ApplicationJsonErrorDescriptionEnum || (exports.Ntltr503ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr503ApplicationJson, _super);
    function Ntltr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr503ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntltr503ApplicationJson = Ntltr503ApplicationJson;
var Ntltr504ApplicationJsonErrorEnum;
(function (Ntltr504ApplicationJsonErrorEnum) {
    Ntltr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ntltr504ApplicationJsonErrorEnum = exports.Ntltr504ApplicationJsonErrorEnum || (exports.Ntltr504ApplicationJsonErrorEnum = {}));
var Ntltr504ApplicationJsonErrorDescriptionEnum;
(function (Ntltr504ApplicationJsonErrorDescriptionEnum) {
    Ntltr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ntltr504ApplicationJsonErrorDescriptionEnum = exports.Ntltr504ApplicationJsonErrorDescriptionEnum || (exports.Ntltr504ApplicationJsonErrorDescriptionEnum = {}));
var Ntltr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ntltr504ApplicationJson, _super);
    function Ntltr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ntltr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ntltr504ApplicationJson.prototype, "errorDescription", void 0);
    return Ntltr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ntltr504ApplicationJson = Ntltr504ApplicationJson;
var NtltrRequest = /** @class */ (function (_super) {
    __extends(NtltrRequest, _super);
    function NtltrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NtltrRequestBody)
    ], NtltrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NtltrSecurity)
    ], NtltrRequest.prototype, "security", void 0);
    return NtltrRequest;
}(utils_1.SpeakeasyBase));
exports.NtltrRequest = NtltrRequest;
var NtltrResponse = /** @class */ (function (_super) {
    __extends(NtltrResponse, _super);
    function NtltrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NtltrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NtltrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntltr400ApplicationJson)
    ], NtltrResponse.prototype, "ntltr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntltr401ApplicationJson)
    ], NtltrResponse.prototype, "ntltr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntltr404ApplicationJson)
    ], NtltrResponse.prototype, "ntltr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntltr500ApplicationJson)
    ], NtltrResponse.prototype, "ntltr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntltr502ApplicationJson)
    ], NtltrResponse.prototype, "ntltr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntltr503ApplicationJson)
    ], NtltrResponse.prototype, "ntltr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ntltr504ApplicationJson)
    ], NtltrResponse.prototype, "ntltr504ApplicationJSONObject", void 0);
    return NtltrResponse;
}(utils_1.SpeakeasyBase));
exports.NtltrResponse = NtltrResponse;
