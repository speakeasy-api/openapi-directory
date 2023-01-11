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
exports.NsescResponse = exports.NsescRequest = exports.Nsesc504ApplicationJson = exports.Nsesc504ApplicationJsonErrorDescriptionEnum = exports.Nsesc504ApplicationJsonErrorEnum = exports.Nsesc503ApplicationJson = exports.Nsesc503ApplicationJsonErrorDescriptionEnum = exports.Nsesc503ApplicationJsonErrorEnum = exports.Nsesc502ApplicationJson = exports.Nsesc502ApplicationJsonErrorDescriptionEnum = exports.Nsesc502ApplicationJsonErrorEnum = exports.Nsesc500ApplicationJson = exports.Nsesc500ApplicationJsonErrorDescriptionEnum = exports.Nsesc500ApplicationJsonErrorEnum = exports.Nsesc404ApplicationJson = exports.Nsesc404ApplicationJsonErrorDescriptionEnum = exports.Nsesc404ApplicationJsonErrorEnum = exports.Nsesc401ApplicationJson = exports.Nsesc401ApplicationJsonErrorDescriptionEnum = exports.Nsesc401ApplicationJsonErrorEnum = exports.Nsesc400ApplicationJson = exports.Nsesc400ApplicationJsonErrorDescriptionEnum = exports.Nsesc400ApplicationJsonErrorEnum = exports.NsescSecurity = exports.NsescRequestBody = exports.NsescRequestBodyFormatEnum = exports.NsescRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NsescRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NsescRequestBodyCertificateParameters, _super);
    function NsescRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NsescRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NsescRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NsescRequestBodyCertificateParameters.prototype, "year", void 0);
    return NsescRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.NsescRequestBodyCertificateParameters = NsescRequestBodyCertificateParameters;
var NsescRequestBodyFormatEnum;
(function (NsescRequestBodyFormatEnum) {
    NsescRequestBodyFormatEnum["Pdf"] = "pdf";
})(NsescRequestBodyFormatEnum = exports.NsescRequestBodyFormatEnum || (exports.NsescRequestBodyFormatEnum = {}));
var NsescRequestBody = /** @class */ (function (_super) {
    __extends(NsescRequestBody, _super);
    function NsescRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NsescRequestBodyCertificateParameters)
    ], NsescRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NsescRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NsescRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NsescRequestBody.prototype, "txnId", void 0);
    return NsescRequestBody;
}(utils_1.SpeakeasyBase));
exports.NsescRequestBody = NsescRequestBody;
var NsescSecurity = /** @class */ (function (_super) {
    __extends(NsescSecurity, _super);
    function NsescSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NsescSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NsescSecurity.prototype, "clientId", void 0);
    return NsescSecurity;
}(utils_1.SpeakeasyBase));
exports.NsescSecurity = NsescSecurity;
var Nsesc400ApplicationJsonErrorEnum;
(function (Nsesc400ApplicationJsonErrorEnum) {
    Nsesc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nsesc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nsesc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nsesc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nsesc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nsesc400ApplicationJsonErrorEnum = exports.Nsesc400ApplicationJsonErrorEnum || (exports.Nsesc400ApplicationJsonErrorEnum = {}));
var Nsesc400ApplicationJsonErrorDescriptionEnum;
(function (Nsesc400ApplicationJsonErrorDescriptionEnum) {
    Nsesc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nsesc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nsesc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nsesc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nsesc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nsesc400ApplicationJsonErrorDescriptionEnum = exports.Nsesc400ApplicationJsonErrorDescriptionEnum || (exports.Nsesc400ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc400ApplicationJson, _super);
    function Nsesc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc400ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nsesc400ApplicationJson = Nsesc400ApplicationJson;
var Nsesc401ApplicationJsonErrorEnum;
(function (Nsesc401ApplicationJsonErrorEnum) {
    Nsesc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nsesc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nsesc401ApplicationJsonErrorEnum = exports.Nsesc401ApplicationJsonErrorEnum || (exports.Nsesc401ApplicationJsonErrorEnum = {}));
var Nsesc401ApplicationJsonErrorDescriptionEnum;
(function (Nsesc401ApplicationJsonErrorDescriptionEnum) {
    Nsesc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nsesc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nsesc401ApplicationJsonErrorDescriptionEnum = exports.Nsesc401ApplicationJsonErrorDescriptionEnum || (exports.Nsesc401ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc401ApplicationJson, _super);
    function Nsesc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc401ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nsesc401ApplicationJson = Nsesc401ApplicationJson;
var Nsesc404ApplicationJsonErrorEnum;
(function (Nsesc404ApplicationJsonErrorEnum) {
    Nsesc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nsesc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nsesc404ApplicationJsonErrorEnum = exports.Nsesc404ApplicationJsonErrorEnum || (exports.Nsesc404ApplicationJsonErrorEnum = {}));
var Nsesc404ApplicationJsonErrorDescriptionEnum;
(function (Nsesc404ApplicationJsonErrorDescriptionEnum) {
    Nsesc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nsesc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nsesc404ApplicationJsonErrorDescriptionEnum = exports.Nsesc404ApplicationJsonErrorDescriptionEnum || (exports.Nsesc404ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc404ApplicationJson, _super);
    function Nsesc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc404ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nsesc404ApplicationJson = Nsesc404ApplicationJson;
var Nsesc500ApplicationJsonErrorEnum;
(function (Nsesc500ApplicationJsonErrorEnum) {
    Nsesc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nsesc500ApplicationJsonErrorEnum = exports.Nsesc500ApplicationJsonErrorEnum || (exports.Nsesc500ApplicationJsonErrorEnum = {}));
var Nsesc500ApplicationJsonErrorDescriptionEnum;
(function (Nsesc500ApplicationJsonErrorDescriptionEnum) {
    Nsesc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nsesc500ApplicationJsonErrorDescriptionEnum = exports.Nsesc500ApplicationJsonErrorDescriptionEnum || (exports.Nsesc500ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc500ApplicationJson, _super);
    function Nsesc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc500ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nsesc500ApplicationJson = Nsesc500ApplicationJson;
var Nsesc502ApplicationJsonErrorEnum;
(function (Nsesc502ApplicationJsonErrorEnum) {
    Nsesc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nsesc502ApplicationJsonErrorEnum = exports.Nsesc502ApplicationJsonErrorEnum || (exports.Nsesc502ApplicationJsonErrorEnum = {}));
var Nsesc502ApplicationJsonErrorDescriptionEnum;
(function (Nsesc502ApplicationJsonErrorDescriptionEnum) {
    Nsesc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nsesc502ApplicationJsonErrorDescriptionEnum = exports.Nsesc502ApplicationJsonErrorDescriptionEnum || (exports.Nsesc502ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc502ApplicationJson, _super);
    function Nsesc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc502ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nsesc502ApplicationJson = Nsesc502ApplicationJson;
var Nsesc503ApplicationJsonErrorEnum;
(function (Nsesc503ApplicationJsonErrorEnum) {
    Nsesc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nsesc503ApplicationJsonErrorEnum = exports.Nsesc503ApplicationJsonErrorEnum || (exports.Nsesc503ApplicationJsonErrorEnum = {}));
var Nsesc503ApplicationJsonErrorDescriptionEnum;
(function (Nsesc503ApplicationJsonErrorDescriptionEnum) {
    Nsesc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nsesc503ApplicationJsonErrorDescriptionEnum = exports.Nsesc503ApplicationJsonErrorDescriptionEnum || (exports.Nsesc503ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc503ApplicationJson, _super);
    function Nsesc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc503ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nsesc503ApplicationJson = Nsesc503ApplicationJson;
var Nsesc504ApplicationJsonErrorEnum;
(function (Nsesc504ApplicationJsonErrorEnum) {
    Nsesc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nsesc504ApplicationJsonErrorEnum = exports.Nsesc504ApplicationJsonErrorEnum || (exports.Nsesc504ApplicationJsonErrorEnum = {}));
var Nsesc504ApplicationJsonErrorDescriptionEnum;
(function (Nsesc504ApplicationJsonErrorDescriptionEnum) {
    Nsesc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nsesc504ApplicationJsonErrorDescriptionEnum = exports.Nsesc504ApplicationJsonErrorDescriptionEnum || (exports.Nsesc504ApplicationJsonErrorDescriptionEnum = {}));
var Nsesc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nsesc504ApplicationJson, _super);
    function Nsesc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nsesc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nsesc504ApplicationJson.prototype, "errorDescription", void 0);
    return Nsesc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nsesc504ApplicationJson = Nsesc504ApplicationJson;
var NsescRequest = /** @class */ (function (_super) {
    __extends(NsescRequest, _super);
    function NsescRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NsescRequestBody)
    ], NsescRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NsescSecurity)
    ], NsescRequest.prototype, "security", void 0);
    return NsescRequest;
}(utils_1.SpeakeasyBase));
exports.NsescRequest = NsescRequest;
var NsescResponse = /** @class */ (function (_super) {
    __extends(NsescResponse, _super);
    function NsescResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NsescResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NsescResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nsesc400ApplicationJson)
    ], NsescResponse.prototype, "nsesc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nsesc401ApplicationJson)
    ], NsescResponse.prototype, "nsesc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nsesc404ApplicationJson)
    ], NsescResponse.prototype, "nsesc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nsesc500ApplicationJson)
    ], NsescResponse.prototype, "nsesc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nsesc502ApplicationJson)
    ], NsescResponse.prototype, "nsesc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nsesc503ApplicationJson)
    ], NsescResponse.prototype, "nsesc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nsesc504ApplicationJson)
    ], NsescResponse.prototype, "nsesc504ApplicationJSONObject", void 0);
    return NsescResponse;
}(utils_1.SpeakeasyBase));
exports.NsescResponse = NsescResponse;
