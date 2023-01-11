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
exports.PfdawResponse = exports.PfdawRequest = exports.Pfdaw504ApplicationJson = exports.Pfdaw504ApplicationJsonErrorDescriptionEnum = exports.Pfdaw504ApplicationJsonErrorEnum = exports.Pfdaw503ApplicationJson = exports.Pfdaw503ApplicationJsonErrorDescriptionEnum = exports.Pfdaw503ApplicationJsonErrorEnum = exports.Pfdaw502ApplicationJson = exports.Pfdaw502ApplicationJsonErrorDescriptionEnum = exports.Pfdaw502ApplicationJsonErrorEnum = exports.Pfdaw500ApplicationJson = exports.Pfdaw500ApplicationJsonErrorDescriptionEnum = exports.Pfdaw500ApplicationJsonErrorEnum = exports.Pfdaw404ApplicationJson = exports.Pfdaw404ApplicationJsonErrorDescriptionEnum = exports.Pfdaw404ApplicationJsonErrorEnum = exports.Pfdaw401ApplicationJson = exports.Pfdaw401ApplicationJsonErrorDescriptionEnum = exports.Pfdaw401ApplicationJsonErrorEnum = exports.Pfdaw400ApplicationJson = exports.Pfdaw400ApplicationJsonErrorDescriptionEnum = exports.Pfdaw400ApplicationJsonErrorEnum = exports.PfdawSecurity = exports.PfdawRequestBody = exports.PfdawRequestBodyFormatEnum = exports.PfdawRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PfdawRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PfdawRequestBodyCertificateParameters, _super);
    function PfdawRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PfdawRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Registration" }),
        __metadata("design:type", String)
    ], PfdawRequestBodyCertificateParameters.prototype, "registration", void 0);
    return PfdawRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PfdawRequestBodyCertificateParameters = PfdawRequestBodyCertificateParameters;
var PfdawRequestBodyFormatEnum;
(function (PfdawRequestBodyFormatEnum) {
    PfdawRequestBodyFormatEnum["Pdf"] = "pdf";
})(PfdawRequestBodyFormatEnum = exports.PfdawRequestBodyFormatEnum || (exports.PfdawRequestBodyFormatEnum = {}));
var PfdawRequestBody = /** @class */ (function (_super) {
    __extends(PfdawRequestBody, _super);
    function PfdawRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PfdawRequestBodyCertificateParameters)
    ], PfdawRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PfdawRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PfdawRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PfdawRequestBody.prototype, "txnId", void 0);
    return PfdawRequestBody;
}(utils_1.SpeakeasyBase));
exports.PfdawRequestBody = PfdawRequestBody;
var PfdawSecurity = /** @class */ (function (_super) {
    __extends(PfdawSecurity, _super);
    function PfdawSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PfdawSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PfdawSecurity.prototype, "clientId", void 0);
    return PfdawSecurity;
}(utils_1.SpeakeasyBase));
exports.PfdawSecurity = PfdawSecurity;
var Pfdaw400ApplicationJsonErrorEnum;
(function (Pfdaw400ApplicationJsonErrorEnum) {
    Pfdaw400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pfdaw400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pfdaw400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pfdaw400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pfdaw400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pfdaw400ApplicationJsonErrorEnum = exports.Pfdaw400ApplicationJsonErrorEnum || (exports.Pfdaw400ApplicationJsonErrorEnum = {}));
var Pfdaw400ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw400ApplicationJsonErrorDescriptionEnum) {
    Pfdaw400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pfdaw400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pfdaw400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pfdaw400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pfdaw400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pfdaw400ApplicationJsonErrorDescriptionEnum = exports.Pfdaw400ApplicationJsonErrorDescriptionEnum || (exports.Pfdaw400ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw400ApplicationJson, _super);
    function Pfdaw400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw400ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pfdaw400ApplicationJson = Pfdaw400ApplicationJson;
var Pfdaw401ApplicationJsonErrorEnum;
(function (Pfdaw401ApplicationJsonErrorEnum) {
    Pfdaw401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pfdaw401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pfdaw401ApplicationJsonErrorEnum = exports.Pfdaw401ApplicationJsonErrorEnum || (exports.Pfdaw401ApplicationJsonErrorEnum = {}));
var Pfdaw401ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw401ApplicationJsonErrorDescriptionEnum) {
    Pfdaw401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pfdaw401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pfdaw401ApplicationJsonErrorDescriptionEnum = exports.Pfdaw401ApplicationJsonErrorDescriptionEnum || (exports.Pfdaw401ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw401ApplicationJson, _super);
    function Pfdaw401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw401ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pfdaw401ApplicationJson = Pfdaw401ApplicationJson;
var Pfdaw404ApplicationJsonErrorEnum;
(function (Pfdaw404ApplicationJsonErrorEnum) {
    Pfdaw404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pfdaw404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pfdaw404ApplicationJsonErrorEnum = exports.Pfdaw404ApplicationJsonErrorEnum || (exports.Pfdaw404ApplicationJsonErrorEnum = {}));
var Pfdaw404ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw404ApplicationJsonErrorDescriptionEnum) {
    Pfdaw404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pfdaw404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pfdaw404ApplicationJsonErrorDescriptionEnum = exports.Pfdaw404ApplicationJsonErrorDescriptionEnum || (exports.Pfdaw404ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw404ApplicationJson, _super);
    function Pfdaw404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw404ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pfdaw404ApplicationJson = Pfdaw404ApplicationJson;
var Pfdaw500ApplicationJsonErrorEnum;
(function (Pfdaw500ApplicationJsonErrorEnum) {
    Pfdaw500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pfdaw500ApplicationJsonErrorEnum = exports.Pfdaw500ApplicationJsonErrorEnum || (exports.Pfdaw500ApplicationJsonErrorEnum = {}));
var Pfdaw500ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw500ApplicationJsonErrorDescriptionEnum) {
    Pfdaw500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pfdaw500ApplicationJsonErrorDescriptionEnum = exports.Pfdaw500ApplicationJsonErrorDescriptionEnum || (exports.Pfdaw500ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw500ApplicationJson, _super);
    function Pfdaw500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw500ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pfdaw500ApplicationJson = Pfdaw500ApplicationJson;
var Pfdaw502ApplicationJsonErrorEnum;
(function (Pfdaw502ApplicationJsonErrorEnum) {
    Pfdaw502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pfdaw502ApplicationJsonErrorEnum = exports.Pfdaw502ApplicationJsonErrorEnum || (exports.Pfdaw502ApplicationJsonErrorEnum = {}));
var Pfdaw502ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw502ApplicationJsonErrorDescriptionEnum) {
    Pfdaw502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pfdaw502ApplicationJsonErrorDescriptionEnum = exports.Pfdaw502ApplicationJsonErrorDescriptionEnum || (exports.Pfdaw502ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw502ApplicationJson, _super);
    function Pfdaw502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw502ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pfdaw502ApplicationJson = Pfdaw502ApplicationJson;
var Pfdaw503ApplicationJsonErrorEnum;
(function (Pfdaw503ApplicationJsonErrorEnum) {
    Pfdaw503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pfdaw503ApplicationJsonErrorEnum = exports.Pfdaw503ApplicationJsonErrorEnum || (exports.Pfdaw503ApplicationJsonErrorEnum = {}));
var Pfdaw503ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw503ApplicationJsonErrorDescriptionEnum) {
    Pfdaw503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pfdaw503ApplicationJsonErrorDescriptionEnum = exports.Pfdaw503ApplicationJsonErrorDescriptionEnum || (exports.Pfdaw503ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw503ApplicationJson, _super);
    function Pfdaw503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw503ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pfdaw503ApplicationJson = Pfdaw503ApplicationJson;
var Pfdaw504ApplicationJsonErrorEnum;
(function (Pfdaw504ApplicationJsonErrorEnum) {
    Pfdaw504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pfdaw504ApplicationJsonErrorEnum = exports.Pfdaw504ApplicationJsonErrorEnum || (exports.Pfdaw504ApplicationJsonErrorEnum = {}));
var Pfdaw504ApplicationJsonErrorDescriptionEnum;
(function (Pfdaw504ApplicationJsonErrorDescriptionEnum) {
    Pfdaw504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pfdaw504ApplicationJsonErrorDescriptionEnum = exports.Pfdaw504ApplicationJsonErrorDescriptionEnum || (exports.Pfdaw504ApplicationJsonErrorDescriptionEnum = {}));
var Pfdaw504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pfdaw504ApplicationJson, _super);
    function Pfdaw504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pfdaw504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pfdaw504ApplicationJson.prototype, "errorDescription", void 0);
    return Pfdaw504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pfdaw504ApplicationJson = Pfdaw504ApplicationJson;
var PfdawRequest = /** @class */ (function (_super) {
    __extends(PfdawRequest, _super);
    function PfdawRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PfdawRequestBody)
    ], PfdawRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PfdawSecurity)
    ], PfdawRequest.prototype, "security", void 0);
    return PfdawRequest;
}(utils_1.SpeakeasyBase));
exports.PfdawRequest = PfdawRequest;
var PfdawResponse = /** @class */ (function (_super) {
    __extends(PfdawResponse, _super);
    function PfdawResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PfdawResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PfdawResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pfdaw400ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pfdaw401ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pfdaw404ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pfdaw500ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pfdaw502ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pfdaw503ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pfdaw504ApplicationJson)
    ], PfdawResponse.prototype, "pfdaw504ApplicationJSONObject", void 0);
    return PfdawResponse;
}(utils_1.SpeakeasyBase));
exports.PfdawResponse = PfdawResponse;
