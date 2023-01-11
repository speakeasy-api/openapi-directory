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
exports.UncrdResponse = exports.UncrdRequest = exports.Uncrd504ApplicationJson = exports.Uncrd504ApplicationJsonErrorDescriptionEnum = exports.Uncrd504ApplicationJsonErrorEnum = exports.Uncrd503ApplicationJson = exports.Uncrd503ApplicationJsonErrorDescriptionEnum = exports.Uncrd503ApplicationJsonErrorEnum = exports.Uncrd502ApplicationJson = exports.Uncrd502ApplicationJsonErrorDescriptionEnum = exports.Uncrd502ApplicationJsonErrorEnum = exports.Uncrd500ApplicationJson = exports.Uncrd500ApplicationJsonErrorDescriptionEnum = exports.Uncrd500ApplicationJsonErrorEnum = exports.Uncrd404ApplicationJson = exports.Uncrd404ApplicationJsonErrorDescriptionEnum = exports.Uncrd404ApplicationJsonErrorEnum = exports.Uncrd401ApplicationJson = exports.Uncrd401ApplicationJsonErrorDescriptionEnum = exports.Uncrd401ApplicationJsonErrorEnum = exports.Uncrd400ApplicationJson = exports.Uncrd400ApplicationJsonErrorDescriptionEnum = exports.Uncrd400ApplicationJsonErrorEnum = exports.UncrdSecurity = exports.UncrdRequestBody = exports.UncrdRequestBodyFormatEnum = exports.UncrdRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UncrdRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(UncrdRequestBodyCertificateParameters, _super);
    function UncrdRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], UncrdRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UAN" }),
        __metadata("design:type", String)
    ], UncrdRequestBodyCertificateParameters.prototype, "uan", void 0);
    return UncrdRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.UncrdRequestBodyCertificateParameters = UncrdRequestBodyCertificateParameters;
var UncrdRequestBodyFormatEnum;
(function (UncrdRequestBodyFormatEnum) {
    UncrdRequestBodyFormatEnum["Pdf"] = "pdf";
})(UncrdRequestBodyFormatEnum = exports.UncrdRequestBodyFormatEnum || (exports.UncrdRequestBodyFormatEnum = {}));
var UncrdRequestBody = /** @class */ (function (_super) {
    __extends(UncrdRequestBody, _super);
    function UncrdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", UncrdRequestBodyCertificateParameters)
    ], UncrdRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], UncrdRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], UncrdRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], UncrdRequestBody.prototype, "txnId", void 0);
    return UncrdRequestBody;
}(utils_1.SpeakeasyBase));
exports.UncrdRequestBody = UncrdRequestBody;
var UncrdSecurity = /** @class */ (function (_super) {
    __extends(UncrdSecurity, _super);
    function UncrdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UncrdSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], UncrdSecurity.prototype, "clientId", void 0);
    return UncrdSecurity;
}(utils_1.SpeakeasyBase));
exports.UncrdSecurity = UncrdSecurity;
var Uncrd400ApplicationJsonErrorEnum;
(function (Uncrd400ApplicationJsonErrorEnum) {
    Uncrd400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Uncrd400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Uncrd400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Uncrd400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Uncrd400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Uncrd400ApplicationJsonErrorEnum = exports.Uncrd400ApplicationJsonErrorEnum || (exports.Uncrd400ApplicationJsonErrorEnum = {}));
var Uncrd400ApplicationJsonErrorDescriptionEnum;
(function (Uncrd400ApplicationJsonErrorDescriptionEnum) {
    Uncrd400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Uncrd400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Uncrd400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Uncrd400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Uncrd400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Uncrd400ApplicationJsonErrorDescriptionEnum = exports.Uncrd400ApplicationJsonErrorDescriptionEnum || (exports.Uncrd400ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd400ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd400ApplicationJson, _super);
    function Uncrd400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd400ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Uncrd400ApplicationJson = Uncrd400ApplicationJson;
var Uncrd401ApplicationJsonErrorEnum;
(function (Uncrd401ApplicationJsonErrorEnum) {
    Uncrd401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Uncrd401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Uncrd401ApplicationJsonErrorEnum = exports.Uncrd401ApplicationJsonErrorEnum || (exports.Uncrd401ApplicationJsonErrorEnum = {}));
var Uncrd401ApplicationJsonErrorDescriptionEnum;
(function (Uncrd401ApplicationJsonErrorDescriptionEnum) {
    Uncrd401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Uncrd401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Uncrd401ApplicationJsonErrorDescriptionEnum = exports.Uncrd401ApplicationJsonErrorDescriptionEnum || (exports.Uncrd401ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd401ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd401ApplicationJson, _super);
    function Uncrd401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd401ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Uncrd401ApplicationJson = Uncrd401ApplicationJson;
var Uncrd404ApplicationJsonErrorEnum;
(function (Uncrd404ApplicationJsonErrorEnum) {
    Uncrd404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Uncrd404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Uncrd404ApplicationJsonErrorEnum = exports.Uncrd404ApplicationJsonErrorEnum || (exports.Uncrd404ApplicationJsonErrorEnum = {}));
var Uncrd404ApplicationJsonErrorDescriptionEnum;
(function (Uncrd404ApplicationJsonErrorDescriptionEnum) {
    Uncrd404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Uncrd404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Uncrd404ApplicationJsonErrorDescriptionEnum = exports.Uncrd404ApplicationJsonErrorDescriptionEnum || (exports.Uncrd404ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd404ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd404ApplicationJson, _super);
    function Uncrd404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd404ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Uncrd404ApplicationJson = Uncrd404ApplicationJson;
var Uncrd500ApplicationJsonErrorEnum;
(function (Uncrd500ApplicationJsonErrorEnum) {
    Uncrd500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Uncrd500ApplicationJsonErrorEnum = exports.Uncrd500ApplicationJsonErrorEnum || (exports.Uncrd500ApplicationJsonErrorEnum = {}));
var Uncrd500ApplicationJsonErrorDescriptionEnum;
(function (Uncrd500ApplicationJsonErrorDescriptionEnum) {
    Uncrd500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Uncrd500ApplicationJsonErrorDescriptionEnum = exports.Uncrd500ApplicationJsonErrorDescriptionEnum || (exports.Uncrd500ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd500ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd500ApplicationJson, _super);
    function Uncrd500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd500ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Uncrd500ApplicationJson = Uncrd500ApplicationJson;
var Uncrd502ApplicationJsonErrorEnum;
(function (Uncrd502ApplicationJsonErrorEnum) {
    Uncrd502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Uncrd502ApplicationJsonErrorEnum = exports.Uncrd502ApplicationJsonErrorEnum || (exports.Uncrd502ApplicationJsonErrorEnum = {}));
var Uncrd502ApplicationJsonErrorDescriptionEnum;
(function (Uncrd502ApplicationJsonErrorDescriptionEnum) {
    Uncrd502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Uncrd502ApplicationJsonErrorDescriptionEnum = exports.Uncrd502ApplicationJsonErrorDescriptionEnum || (exports.Uncrd502ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd502ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd502ApplicationJson, _super);
    function Uncrd502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd502ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Uncrd502ApplicationJson = Uncrd502ApplicationJson;
var Uncrd503ApplicationJsonErrorEnum;
(function (Uncrd503ApplicationJsonErrorEnum) {
    Uncrd503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Uncrd503ApplicationJsonErrorEnum = exports.Uncrd503ApplicationJsonErrorEnum || (exports.Uncrd503ApplicationJsonErrorEnum = {}));
var Uncrd503ApplicationJsonErrorDescriptionEnum;
(function (Uncrd503ApplicationJsonErrorDescriptionEnum) {
    Uncrd503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Uncrd503ApplicationJsonErrorDescriptionEnum = exports.Uncrd503ApplicationJsonErrorDescriptionEnum || (exports.Uncrd503ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd503ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd503ApplicationJson, _super);
    function Uncrd503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd503ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Uncrd503ApplicationJson = Uncrd503ApplicationJson;
var Uncrd504ApplicationJsonErrorEnum;
(function (Uncrd504ApplicationJsonErrorEnum) {
    Uncrd504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Uncrd504ApplicationJsonErrorEnum = exports.Uncrd504ApplicationJsonErrorEnum || (exports.Uncrd504ApplicationJsonErrorEnum = {}));
var Uncrd504ApplicationJsonErrorDescriptionEnum;
(function (Uncrd504ApplicationJsonErrorDescriptionEnum) {
    Uncrd504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Uncrd504ApplicationJsonErrorDescriptionEnum = exports.Uncrd504ApplicationJsonErrorDescriptionEnum || (exports.Uncrd504ApplicationJsonErrorDescriptionEnum = {}));
var Uncrd504ApplicationJson = /** @class */ (function (_super) {
    __extends(Uncrd504ApplicationJson, _super);
    function Uncrd504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Uncrd504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Uncrd504ApplicationJson.prototype, "errorDescription", void 0);
    return Uncrd504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Uncrd504ApplicationJson = Uncrd504ApplicationJson;
var UncrdRequest = /** @class */ (function (_super) {
    __extends(UncrdRequest, _super);
    function UncrdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UncrdRequestBody)
    ], UncrdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UncrdSecurity)
    ], UncrdRequest.prototype, "security", void 0);
    return UncrdRequest;
}(utils_1.SpeakeasyBase));
exports.UncrdRequest = UncrdRequest;
var UncrdResponse = /** @class */ (function (_super) {
    __extends(UncrdResponse, _super);
    function UncrdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UncrdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UncrdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uncrd400ApplicationJson)
    ], UncrdResponse.prototype, "uncrd400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uncrd401ApplicationJson)
    ], UncrdResponse.prototype, "uncrd401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uncrd404ApplicationJson)
    ], UncrdResponse.prototype, "uncrd404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uncrd500ApplicationJson)
    ], UncrdResponse.prototype, "uncrd500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uncrd502ApplicationJson)
    ], UncrdResponse.prototype, "uncrd502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uncrd503ApplicationJson)
    ], UncrdResponse.prototype, "uncrd503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uncrd504ApplicationJson)
    ], UncrdResponse.prototype, "uncrd504ApplicationJSONObject", void 0);
    return UncrdResponse;
}(utils_1.SpeakeasyBase));
exports.UncrdResponse = UncrdResponse;
