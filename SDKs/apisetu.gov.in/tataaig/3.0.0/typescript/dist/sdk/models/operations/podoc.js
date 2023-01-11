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
exports.PodocResponse = exports.PodocRequest = exports.Podoc504ApplicationJson = exports.Podoc504ApplicationJsonErrorDescriptionEnum = exports.Podoc504ApplicationJsonErrorEnum = exports.Podoc503ApplicationJson = exports.Podoc503ApplicationJsonErrorDescriptionEnum = exports.Podoc503ApplicationJsonErrorEnum = exports.Podoc502ApplicationJson = exports.Podoc502ApplicationJsonErrorDescriptionEnum = exports.Podoc502ApplicationJsonErrorEnum = exports.Podoc500ApplicationJson = exports.Podoc500ApplicationJsonErrorDescriptionEnum = exports.Podoc500ApplicationJsonErrorEnum = exports.Podoc404ApplicationJson = exports.Podoc404ApplicationJsonErrorDescriptionEnum = exports.Podoc404ApplicationJsonErrorEnum = exports.Podoc401ApplicationJson = exports.Podoc401ApplicationJsonErrorDescriptionEnum = exports.Podoc401ApplicationJsonErrorEnum = exports.Podoc400ApplicationJson = exports.Podoc400ApplicationJsonErrorDescriptionEnum = exports.Podoc400ApplicationJsonErrorEnum = exports.PodocSecurity = exports.PodocRequestBody = exports.PodocRequestBodyFormatEnum = exports.PodocRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PodocRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PodocRequestBodyCertificateParameters, _super);
    function PodocRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PodocRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PolicyNumber" }),
        __metadata("design:type", String)
    ], PodocRequestBodyCertificateParameters.prototype, "policyNumber", void 0);
    return PodocRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PodocRequestBodyCertificateParameters = PodocRequestBodyCertificateParameters;
var PodocRequestBodyFormatEnum;
(function (PodocRequestBodyFormatEnum) {
    PodocRequestBodyFormatEnum["Pdf"] = "pdf";
})(PodocRequestBodyFormatEnum = exports.PodocRequestBodyFormatEnum || (exports.PodocRequestBodyFormatEnum = {}));
var PodocRequestBody = /** @class */ (function (_super) {
    __extends(PodocRequestBody, _super);
    function PodocRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PodocRequestBodyCertificateParameters)
    ], PodocRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PodocRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PodocRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PodocRequestBody.prototype, "txnId", void 0);
    return PodocRequestBody;
}(utils_1.SpeakeasyBase));
exports.PodocRequestBody = PodocRequestBody;
var PodocSecurity = /** @class */ (function (_super) {
    __extends(PodocSecurity, _super);
    function PodocSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PodocSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PodocSecurity.prototype, "clientId", void 0);
    return PodocSecurity;
}(utils_1.SpeakeasyBase));
exports.PodocSecurity = PodocSecurity;
var Podoc400ApplicationJsonErrorEnum;
(function (Podoc400ApplicationJsonErrorEnum) {
    Podoc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Podoc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Podoc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Podoc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Podoc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Podoc400ApplicationJsonErrorEnum = exports.Podoc400ApplicationJsonErrorEnum || (exports.Podoc400ApplicationJsonErrorEnum = {}));
var Podoc400ApplicationJsonErrorDescriptionEnum;
(function (Podoc400ApplicationJsonErrorDescriptionEnum) {
    Podoc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Podoc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Podoc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Podoc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Podoc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Podoc400ApplicationJsonErrorDescriptionEnum = exports.Podoc400ApplicationJsonErrorDescriptionEnum || (exports.Podoc400ApplicationJsonErrorDescriptionEnum = {}));
var Podoc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc400ApplicationJson, _super);
    function Podoc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc400ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Podoc400ApplicationJson = Podoc400ApplicationJson;
var Podoc401ApplicationJsonErrorEnum;
(function (Podoc401ApplicationJsonErrorEnum) {
    Podoc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Podoc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Podoc401ApplicationJsonErrorEnum = exports.Podoc401ApplicationJsonErrorEnum || (exports.Podoc401ApplicationJsonErrorEnum = {}));
var Podoc401ApplicationJsonErrorDescriptionEnum;
(function (Podoc401ApplicationJsonErrorDescriptionEnum) {
    Podoc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Podoc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Podoc401ApplicationJsonErrorDescriptionEnum = exports.Podoc401ApplicationJsonErrorDescriptionEnum || (exports.Podoc401ApplicationJsonErrorDescriptionEnum = {}));
var Podoc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc401ApplicationJson, _super);
    function Podoc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc401ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Podoc401ApplicationJson = Podoc401ApplicationJson;
var Podoc404ApplicationJsonErrorEnum;
(function (Podoc404ApplicationJsonErrorEnum) {
    Podoc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Podoc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Podoc404ApplicationJsonErrorEnum = exports.Podoc404ApplicationJsonErrorEnum || (exports.Podoc404ApplicationJsonErrorEnum = {}));
var Podoc404ApplicationJsonErrorDescriptionEnum;
(function (Podoc404ApplicationJsonErrorDescriptionEnum) {
    Podoc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Podoc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Podoc404ApplicationJsonErrorDescriptionEnum = exports.Podoc404ApplicationJsonErrorDescriptionEnum || (exports.Podoc404ApplicationJsonErrorDescriptionEnum = {}));
var Podoc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc404ApplicationJson, _super);
    function Podoc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc404ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Podoc404ApplicationJson = Podoc404ApplicationJson;
var Podoc500ApplicationJsonErrorEnum;
(function (Podoc500ApplicationJsonErrorEnum) {
    Podoc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Podoc500ApplicationJsonErrorEnum = exports.Podoc500ApplicationJsonErrorEnum || (exports.Podoc500ApplicationJsonErrorEnum = {}));
var Podoc500ApplicationJsonErrorDescriptionEnum;
(function (Podoc500ApplicationJsonErrorDescriptionEnum) {
    Podoc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Podoc500ApplicationJsonErrorDescriptionEnum = exports.Podoc500ApplicationJsonErrorDescriptionEnum || (exports.Podoc500ApplicationJsonErrorDescriptionEnum = {}));
var Podoc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc500ApplicationJson, _super);
    function Podoc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc500ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Podoc500ApplicationJson = Podoc500ApplicationJson;
var Podoc502ApplicationJsonErrorEnum;
(function (Podoc502ApplicationJsonErrorEnum) {
    Podoc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Podoc502ApplicationJsonErrorEnum = exports.Podoc502ApplicationJsonErrorEnum || (exports.Podoc502ApplicationJsonErrorEnum = {}));
var Podoc502ApplicationJsonErrorDescriptionEnum;
(function (Podoc502ApplicationJsonErrorDescriptionEnum) {
    Podoc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Podoc502ApplicationJsonErrorDescriptionEnum = exports.Podoc502ApplicationJsonErrorDescriptionEnum || (exports.Podoc502ApplicationJsonErrorDescriptionEnum = {}));
var Podoc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc502ApplicationJson, _super);
    function Podoc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc502ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Podoc502ApplicationJson = Podoc502ApplicationJson;
var Podoc503ApplicationJsonErrorEnum;
(function (Podoc503ApplicationJsonErrorEnum) {
    Podoc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Podoc503ApplicationJsonErrorEnum = exports.Podoc503ApplicationJsonErrorEnum || (exports.Podoc503ApplicationJsonErrorEnum = {}));
var Podoc503ApplicationJsonErrorDescriptionEnum;
(function (Podoc503ApplicationJsonErrorDescriptionEnum) {
    Podoc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Podoc503ApplicationJsonErrorDescriptionEnum = exports.Podoc503ApplicationJsonErrorDescriptionEnum || (exports.Podoc503ApplicationJsonErrorDescriptionEnum = {}));
var Podoc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc503ApplicationJson, _super);
    function Podoc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc503ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Podoc503ApplicationJson = Podoc503ApplicationJson;
var Podoc504ApplicationJsonErrorEnum;
(function (Podoc504ApplicationJsonErrorEnum) {
    Podoc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Podoc504ApplicationJsonErrorEnum = exports.Podoc504ApplicationJsonErrorEnum || (exports.Podoc504ApplicationJsonErrorEnum = {}));
var Podoc504ApplicationJsonErrorDescriptionEnum;
(function (Podoc504ApplicationJsonErrorDescriptionEnum) {
    Podoc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Podoc504ApplicationJsonErrorDescriptionEnum = exports.Podoc504ApplicationJsonErrorDescriptionEnum || (exports.Podoc504ApplicationJsonErrorDescriptionEnum = {}));
var Podoc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Podoc504ApplicationJson, _super);
    function Podoc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Podoc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Podoc504ApplicationJson.prototype, "errorDescription", void 0);
    return Podoc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Podoc504ApplicationJson = Podoc504ApplicationJson;
var PodocRequest = /** @class */ (function (_super) {
    __extends(PodocRequest, _super);
    function PodocRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PodocRequestBody)
    ], PodocRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PodocSecurity)
    ], PodocRequest.prototype, "security", void 0);
    return PodocRequest;
}(utils_1.SpeakeasyBase));
exports.PodocRequest = PodocRequest;
var PodocResponse = /** @class */ (function (_super) {
    __extends(PodocResponse, _super);
    function PodocResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PodocResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PodocResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Podoc400ApplicationJson)
    ], PodocResponse.prototype, "podoc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Podoc401ApplicationJson)
    ], PodocResponse.prototype, "podoc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Podoc404ApplicationJson)
    ], PodocResponse.prototype, "podoc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Podoc500ApplicationJson)
    ], PodocResponse.prototype, "podoc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Podoc502ApplicationJson)
    ], PodocResponse.prototype, "podoc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Podoc503ApplicationJson)
    ], PodocResponse.prototype, "podoc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Podoc504ApplicationJson)
    ], PodocResponse.prototype, "podoc504ApplicationJSONObject", void 0);
    return PodocResponse;
}(utils_1.SpeakeasyBase));
exports.PodocResponse = PodocResponse;
