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
exports.AdcrdResponse = exports.AdcrdRequest = exports.Adcrd504ApplicationJson = exports.Adcrd504ApplicationJsonErrorDescriptionEnum = exports.Adcrd504ApplicationJsonErrorEnum = exports.Adcrd503ApplicationJson = exports.Adcrd503ApplicationJsonErrorDescriptionEnum = exports.Adcrd503ApplicationJsonErrorEnum = exports.Adcrd502ApplicationJson = exports.Adcrd502ApplicationJsonErrorDescriptionEnum = exports.Adcrd502ApplicationJsonErrorEnum = exports.Adcrd500ApplicationJson = exports.Adcrd500ApplicationJsonErrorDescriptionEnum = exports.Adcrd500ApplicationJsonErrorEnum = exports.Adcrd404ApplicationJson = exports.Adcrd404ApplicationJsonErrorDescriptionEnum = exports.Adcrd404ApplicationJsonErrorEnum = exports.Adcrd401ApplicationJson = exports.Adcrd401ApplicationJsonErrorDescriptionEnum = exports.Adcrd401ApplicationJsonErrorEnum = exports.Adcrd400ApplicationJson = exports.Adcrd400ApplicationJsonErrorDescriptionEnum = exports.Adcrd400ApplicationJsonErrorEnum = exports.AdcrdSecurity = exports.AdcrdRequestBody = exports.AdcrdRequestBodyFormatEnum = exports.AdcrdRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AdcrdRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AdcrdRequestBodyCertificateParameters, _super);
    function AdcrdRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApplicationNo" }),
        __metadata("design:type", String)
    ], AdcrdRequestBodyCertificateParameters.prototype, "applicationNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], AdcrdRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExamYear" }),
        __metadata("design:type", String)
    ], AdcrdRequestBodyCertificateParameters.prototype, "examYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], AdcrdRequestBodyCertificateParameters.prototype, "fullName", void 0);
    return AdcrdRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.AdcrdRequestBodyCertificateParameters = AdcrdRequestBodyCertificateParameters;
var AdcrdRequestBodyFormatEnum;
(function (AdcrdRequestBodyFormatEnum) {
    AdcrdRequestBodyFormatEnum["Pdf"] = "pdf";
})(AdcrdRequestBodyFormatEnum = exports.AdcrdRequestBodyFormatEnum || (exports.AdcrdRequestBodyFormatEnum = {}));
var AdcrdRequestBody = /** @class */ (function (_super) {
    __extends(AdcrdRequestBody, _super);
    function AdcrdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AdcrdRequestBodyCertificateParameters)
    ], AdcrdRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AdcrdRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AdcrdRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AdcrdRequestBody.prototype, "txnId", void 0);
    return AdcrdRequestBody;
}(utils_1.SpeakeasyBase));
exports.AdcrdRequestBody = AdcrdRequestBody;
var AdcrdSecurity = /** @class */ (function (_super) {
    __extends(AdcrdSecurity, _super);
    function AdcrdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AdcrdSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AdcrdSecurity.prototype, "clientId", void 0);
    return AdcrdSecurity;
}(utils_1.SpeakeasyBase));
exports.AdcrdSecurity = AdcrdSecurity;
var Adcrd400ApplicationJsonErrorEnum;
(function (Adcrd400ApplicationJsonErrorEnum) {
    Adcrd400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Adcrd400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Adcrd400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Adcrd400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Adcrd400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Adcrd400ApplicationJsonErrorEnum = exports.Adcrd400ApplicationJsonErrorEnum || (exports.Adcrd400ApplicationJsonErrorEnum = {}));
var Adcrd400ApplicationJsonErrorDescriptionEnum;
(function (Adcrd400ApplicationJsonErrorDescriptionEnum) {
    Adcrd400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Adcrd400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Adcrd400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Adcrd400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Adcrd400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Adcrd400ApplicationJsonErrorDescriptionEnum = exports.Adcrd400ApplicationJsonErrorDescriptionEnum || (exports.Adcrd400ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd400ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd400ApplicationJson, _super);
    function Adcrd400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd400ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Adcrd400ApplicationJson = Adcrd400ApplicationJson;
var Adcrd401ApplicationJsonErrorEnum;
(function (Adcrd401ApplicationJsonErrorEnum) {
    Adcrd401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Adcrd401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Adcrd401ApplicationJsonErrorEnum = exports.Adcrd401ApplicationJsonErrorEnum || (exports.Adcrd401ApplicationJsonErrorEnum = {}));
var Adcrd401ApplicationJsonErrorDescriptionEnum;
(function (Adcrd401ApplicationJsonErrorDescriptionEnum) {
    Adcrd401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Adcrd401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Adcrd401ApplicationJsonErrorDescriptionEnum = exports.Adcrd401ApplicationJsonErrorDescriptionEnum || (exports.Adcrd401ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd401ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd401ApplicationJson, _super);
    function Adcrd401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd401ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Adcrd401ApplicationJson = Adcrd401ApplicationJson;
var Adcrd404ApplicationJsonErrorEnum;
(function (Adcrd404ApplicationJsonErrorEnum) {
    Adcrd404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Adcrd404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Adcrd404ApplicationJsonErrorEnum = exports.Adcrd404ApplicationJsonErrorEnum || (exports.Adcrd404ApplicationJsonErrorEnum = {}));
var Adcrd404ApplicationJsonErrorDescriptionEnum;
(function (Adcrd404ApplicationJsonErrorDescriptionEnum) {
    Adcrd404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Adcrd404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Adcrd404ApplicationJsonErrorDescriptionEnum = exports.Adcrd404ApplicationJsonErrorDescriptionEnum || (exports.Adcrd404ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd404ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd404ApplicationJson, _super);
    function Adcrd404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd404ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Adcrd404ApplicationJson = Adcrd404ApplicationJson;
var Adcrd500ApplicationJsonErrorEnum;
(function (Adcrd500ApplicationJsonErrorEnum) {
    Adcrd500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Adcrd500ApplicationJsonErrorEnum = exports.Adcrd500ApplicationJsonErrorEnum || (exports.Adcrd500ApplicationJsonErrorEnum = {}));
var Adcrd500ApplicationJsonErrorDescriptionEnum;
(function (Adcrd500ApplicationJsonErrorDescriptionEnum) {
    Adcrd500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Adcrd500ApplicationJsonErrorDescriptionEnum = exports.Adcrd500ApplicationJsonErrorDescriptionEnum || (exports.Adcrd500ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd500ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd500ApplicationJson, _super);
    function Adcrd500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd500ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Adcrd500ApplicationJson = Adcrd500ApplicationJson;
var Adcrd502ApplicationJsonErrorEnum;
(function (Adcrd502ApplicationJsonErrorEnum) {
    Adcrd502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Adcrd502ApplicationJsonErrorEnum = exports.Adcrd502ApplicationJsonErrorEnum || (exports.Adcrd502ApplicationJsonErrorEnum = {}));
var Adcrd502ApplicationJsonErrorDescriptionEnum;
(function (Adcrd502ApplicationJsonErrorDescriptionEnum) {
    Adcrd502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Adcrd502ApplicationJsonErrorDescriptionEnum = exports.Adcrd502ApplicationJsonErrorDescriptionEnum || (exports.Adcrd502ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd502ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd502ApplicationJson, _super);
    function Adcrd502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd502ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Adcrd502ApplicationJson = Adcrd502ApplicationJson;
var Adcrd503ApplicationJsonErrorEnum;
(function (Adcrd503ApplicationJsonErrorEnum) {
    Adcrd503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Adcrd503ApplicationJsonErrorEnum = exports.Adcrd503ApplicationJsonErrorEnum || (exports.Adcrd503ApplicationJsonErrorEnum = {}));
var Adcrd503ApplicationJsonErrorDescriptionEnum;
(function (Adcrd503ApplicationJsonErrorDescriptionEnum) {
    Adcrd503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Adcrd503ApplicationJsonErrorDescriptionEnum = exports.Adcrd503ApplicationJsonErrorDescriptionEnum || (exports.Adcrd503ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd503ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd503ApplicationJson, _super);
    function Adcrd503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd503ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Adcrd503ApplicationJson = Adcrd503ApplicationJson;
var Adcrd504ApplicationJsonErrorEnum;
(function (Adcrd504ApplicationJsonErrorEnum) {
    Adcrd504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Adcrd504ApplicationJsonErrorEnum = exports.Adcrd504ApplicationJsonErrorEnum || (exports.Adcrd504ApplicationJsonErrorEnum = {}));
var Adcrd504ApplicationJsonErrorDescriptionEnum;
(function (Adcrd504ApplicationJsonErrorDescriptionEnum) {
    Adcrd504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Adcrd504ApplicationJsonErrorDescriptionEnum = exports.Adcrd504ApplicationJsonErrorDescriptionEnum || (exports.Adcrd504ApplicationJsonErrorDescriptionEnum = {}));
var Adcrd504ApplicationJson = /** @class */ (function (_super) {
    __extends(Adcrd504ApplicationJson, _super);
    function Adcrd504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Adcrd504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Adcrd504ApplicationJson.prototype, "errorDescription", void 0);
    return Adcrd504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Adcrd504ApplicationJson = Adcrd504ApplicationJson;
var AdcrdRequest = /** @class */ (function (_super) {
    __extends(AdcrdRequest, _super);
    function AdcrdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AdcrdRequestBody)
    ], AdcrdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AdcrdSecurity)
    ], AdcrdRequest.prototype, "security", void 0);
    return AdcrdRequest;
}(utils_1.SpeakeasyBase));
exports.AdcrdRequest = AdcrdRequest;
var AdcrdResponse = /** @class */ (function (_super) {
    __extends(AdcrdResponse, _super);
    function AdcrdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AdcrdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AdcrdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adcrd400ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adcrd401ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adcrd404ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adcrd500ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adcrd502ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adcrd503ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Adcrd504ApplicationJson)
    ], AdcrdResponse.prototype, "adcrd504ApplicationJSONObject", void 0);
    return AdcrdResponse;
}(utils_1.SpeakeasyBase));
exports.AdcrdResponse = AdcrdResponse;
