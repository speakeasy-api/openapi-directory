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
exports.CfltrResponse = exports.CfltrRequest = exports.Cfltr504ApplicationJson = exports.Cfltr504ApplicationJsonErrorDescriptionEnum = exports.Cfltr504ApplicationJsonErrorEnum = exports.Cfltr503ApplicationJson = exports.Cfltr503ApplicationJsonErrorDescriptionEnum = exports.Cfltr503ApplicationJsonErrorEnum = exports.Cfltr502ApplicationJson = exports.Cfltr502ApplicationJsonErrorDescriptionEnum = exports.Cfltr502ApplicationJsonErrorEnum = exports.Cfltr500ApplicationJson = exports.Cfltr500ApplicationJsonErrorDescriptionEnum = exports.Cfltr500ApplicationJsonErrorEnum = exports.Cfltr404ApplicationJson = exports.Cfltr404ApplicationJsonErrorDescriptionEnum = exports.Cfltr404ApplicationJsonErrorEnum = exports.Cfltr401ApplicationJson = exports.Cfltr401ApplicationJsonErrorDescriptionEnum = exports.Cfltr401ApplicationJsonErrorEnum = exports.Cfltr400ApplicationJson = exports.Cfltr400ApplicationJsonErrorDescriptionEnum = exports.Cfltr400ApplicationJsonErrorEnum = exports.CfltrSecurity = exports.CfltrRequestBody = exports.CfltrRequestBodyFormatEnum = exports.CfltrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CfltrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CfltrRequestBodyCertificateParameters, _super);
    function CfltrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], CfltrRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], CfltrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], CfltrRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], CfltrRequestBodyCertificateParameters.prototype, "uid", void 0);
    return CfltrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CfltrRequestBodyCertificateParameters = CfltrRequestBodyCertificateParameters;
var CfltrRequestBodyFormatEnum;
(function (CfltrRequestBodyFormatEnum) {
    CfltrRequestBodyFormatEnum["Pdf"] = "pdf";
})(CfltrRequestBodyFormatEnum = exports.CfltrRequestBodyFormatEnum || (exports.CfltrRequestBodyFormatEnum = {}));
var CfltrRequestBody = /** @class */ (function (_super) {
    __extends(CfltrRequestBody, _super);
    function CfltrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CfltrRequestBodyCertificateParameters)
    ], CfltrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CfltrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CfltrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CfltrRequestBody.prototype, "txnId", void 0);
    return CfltrRequestBody;
}(utils_1.SpeakeasyBase));
exports.CfltrRequestBody = CfltrRequestBody;
var CfltrSecurity = /** @class */ (function (_super) {
    __extends(CfltrSecurity, _super);
    function CfltrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CfltrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CfltrSecurity.prototype, "clientId", void 0);
    return CfltrSecurity;
}(utils_1.SpeakeasyBase));
exports.CfltrSecurity = CfltrSecurity;
var Cfltr400ApplicationJsonErrorEnum;
(function (Cfltr400ApplicationJsonErrorEnum) {
    Cfltr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cfltr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cfltr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cfltr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cfltr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cfltr400ApplicationJsonErrorEnum = exports.Cfltr400ApplicationJsonErrorEnum || (exports.Cfltr400ApplicationJsonErrorEnum = {}));
var Cfltr400ApplicationJsonErrorDescriptionEnum;
(function (Cfltr400ApplicationJsonErrorDescriptionEnum) {
    Cfltr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cfltr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cfltr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cfltr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cfltr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cfltr400ApplicationJsonErrorDescriptionEnum = exports.Cfltr400ApplicationJsonErrorDescriptionEnum || (exports.Cfltr400ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr400ApplicationJson, _super);
    function Cfltr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr400ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfltr400ApplicationJson = Cfltr400ApplicationJson;
var Cfltr401ApplicationJsonErrorEnum;
(function (Cfltr401ApplicationJsonErrorEnum) {
    Cfltr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cfltr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cfltr401ApplicationJsonErrorEnum = exports.Cfltr401ApplicationJsonErrorEnum || (exports.Cfltr401ApplicationJsonErrorEnum = {}));
var Cfltr401ApplicationJsonErrorDescriptionEnum;
(function (Cfltr401ApplicationJsonErrorDescriptionEnum) {
    Cfltr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cfltr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cfltr401ApplicationJsonErrorDescriptionEnum = exports.Cfltr401ApplicationJsonErrorDescriptionEnum || (exports.Cfltr401ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr401ApplicationJson, _super);
    function Cfltr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr401ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfltr401ApplicationJson = Cfltr401ApplicationJson;
var Cfltr404ApplicationJsonErrorEnum;
(function (Cfltr404ApplicationJsonErrorEnum) {
    Cfltr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cfltr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cfltr404ApplicationJsonErrorEnum = exports.Cfltr404ApplicationJsonErrorEnum || (exports.Cfltr404ApplicationJsonErrorEnum = {}));
var Cfltr404ApplicationJsonErrorDescriptionEnum;
(function (Cfltr404ApplicationJsonErrorDescriptionEnum) {
    Cfltr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cfltr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cfltr404ApplicationJsonErrorDescriptionEnum = exports.Cfltr404ApplicationJsonErrorDescriptionEnum || (exports.Cfltr404ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr404ApplicationJson, _super);
    function Cfltr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr404ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfltr404ApplicationJson = Cfltr404ApplicationJson;
var Cfltr500ApplicationJsonErrorEnum;
(function (Cfltr500ApplicationJsonErrorEnum) {
    Cfltr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cfltr500ApplicationJsonErrorEnum = exports.Cfltr500ApplicationJsonErrorEnum || (exports.Cfltr500ApplicationJsonErrorEnum = {}));
var Cfltr500ApplicationJsonErrorDescriptionEnum;
(function (Cfltr500ApplicationJsonErrorDescriptionEnum) {
    Cfltr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cfltr500ApplicationJsonErrorDescriptionEnum = exports.Cfltr500ApplicationJsonErrorDescriptionEnum || (exports.Cfltr500ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr500ApplicationJson, _super);
    function Cfltr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr500ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfltr500ApplicationJson = Cfltr500ApplicationJson;
var Cfltr502ApplicationJsonErrorEnum;
(function (Cfltr502ApplicationJsonErrorEnum) {
    Cfltr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cfltr502ApplicationJsonErrorEnum = exports.Cfltr502ApplicationJsonErrorEnum || (exports.Cfltr502ApplicationJsonErrorEnum = {}));
var Cfltr502ApplicationJsonErrorDescriptionEnum;
(function (Cfltr502ApplicationJsonErrorDescriptionEnum) {
    Cfltr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cfltr502ApplicationJsonErrorDescriptionEnum = exports.Cfltr502ApplicationJsonErrorDescriptionEnum || (exports.Cfltr502ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr502ApplicationJson, _super);
    function Cfltr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr502ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfltr502ApplicationJson = Cfltr502ApplicationJson;
var Cfltr503ApplicationJsonErrorEnum;
(function (Cfltr503ApplicationJsonErrorEnum) {
    Cfltr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cfltr503ApplicationJsonErrorEnum = exports.Cfltr503ApplicationJsonErrorEnum || (exports.Cfltr503ApplicationJsonErrorEnum = {}));
var Cfltr503ApplicationJsonErrorDescriptionEnum;
(function (Cfltr503ApplicationJsonErrorDescriptionEnum) {
    Cfltr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cfltr503ApplicationJsonErrorDescriptionEnum = exports.Cfltr503ApplicationJsonErrorDescriptionEnum || (exports.Cfltr503ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr503ApplicationJson, _super);
    function Cfltr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr503ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfltr503ApplicationJson = Cfltr503ApplicationJson;
var Cfltr504ApplicationJsonErrorEnum;
(function (Cfltr504ApplicationJsonErrorEnum) {
    Cfltr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cfltr504ApplicationJsonErrorEnum = exports.Cfltr504ApplicationJsonErrorEnum || (exports.Cfltr504ApplicationJsonErrorEnum = {}));
var Cfltr504ApplicationJsonErrorDescriptionEnum;
(function (Cfltr504ApplicationJsonErrorDescriptionEnum) {
    Cfltr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cfltr504ApplicationJsonErrorDescriptionEnum = exports.Cfltr504ApplicationJsonErrorDescriptionEnum || (exports.Cfltr504ApplicationJsonErrorDescriptionEnum = {}));
var Cfltr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfltr504ApplicationJson, _super);
    function Cfltr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfltr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfltr504ApplicationJson.prototype, "errorDescription", void 0);
    return Cfltr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfltr504ApplicationJson = Cfltr504ApplicationJson;
var CfltrRequest = /** @class */ (function (_super) {
    __extends(CfltrRequest, _super);
    function CfltrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CfltrRequestBody)
    ], CfltrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CfltrSecurity)
    ], CfltrRequest.prototype, "security", void 0);
    return CfltrRequest;
}(utils_1.SpeakeasyBase));
exports.CfltrRequest = CfltrRequest;
var CfltrResponse = /** @class */ (function (_super) {
    __extends(CfltrResponse, _super);
    function CfltrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CfltrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CfltrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfltr400ApplicationJson)
    ], CfltrResponse.prototype, "cfltr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfltr401ApplicationJson)
    ], CfltrResponse.prototype, "cfltr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfltr404ApplicationJson)
    ], CfltrResponse.prototype, "cfltr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfltr500ApplicationJson)
    ], CfltrResponse.prototype, "cfltr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfltr502ApplicationJson)
    ], CfltrResponse.prototype, "cfltr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfltr503ApplicationJson)
    ], CfltrResponse.prototype, "cfltr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfltr504ApplicationJson)
    ], CfltrResponse.prototype, "cfltr504ApplicationJSONObject", void 0);
    return CfltrResponse;
}(utils_1.SpeakeasyBase));
exports.CfltrResponse = CfltrResponse;
