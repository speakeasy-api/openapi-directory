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
exports.AlsblResponse = exports.AlsblRequest = exports.Alsbl504ApplicationJson = exports.Alsbl504ApplicationJsonErrorDescriptionEnum = exports.Alsbl504ApplicationJsonErrorEnum = exports.Alsbl503ApplicationJson = exports.Alsbl503ApplicationJsonErrorDescriptionEnum = exports.Alsbl503ApplicationJsonErrorEnum = exports.Alsbl502ApplicationJson = exports.Alsbl502ApplicationJsonErrorDescriptionEnum = exports.Alsbl502ApplicationJsonErrorEnum = exports.Alsbl500ApplicationJson = exports.Alsbl500ApplicationJsonErrorDescriptionEnum = exports.Alsbl500ApplicationJsonErrorEnum = exports.Alsbl404ApplicationJson = exports.Alsbl404ApplicationJsonErrorDescriptionEnum = exports.Alsbl404ApplicationJsonErrorEnum = exports.Alsbl401ApplicationJson = exports.Alsbl401ApplicationJsonErrorDescriptionEnum = exports.Alsbl401ApplicationJsonErrorEnum = exports.Alsbl400ApplicationJson = exports.Alsbl400ApplicationJsonErrorDescriptionEnum = exports.Alsbl400ApplicationJsonErrorEnum = exports.AlsblSecurity = exports.AlsblRequestBody = exports.AlsblRequestBodyFormatEnum = exports.AlsblRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AlsblRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AlsblRequestBodyCertificateParameters, _super);
    function AlsblRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], AlsblRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], AlsblRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return AlsblRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.AlsblRequestBodyCertificateParameters = AlsblRequestBodyCertificateParameters;
var AlsblRequestBodyFormatEnum;
(function (AlsblRequestBodyFormatEnum) {
    AlsblRequestBodyFormatEnum["Pdf"] = "pdf";
})(AlsblRequestBodyFormatEnum = exports.AlsblRequestBodyFormatEnum || (exports.AlsblRequestBodyFormatEnum = {}));
var AlsblRequestBody = /** @class */ (function (_super) {
    __extends(AlsblRequestBody, _super);
    function AlsblRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AlsblRequestBodyCertificateParameters)
    ], AlsblRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AlsblRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AlsblRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AlsblRequestBody.prototype, "txnId", void 0);
    return AlsblRequestBody;
}(utils_1.SpeakeasyBase));
exports.AlsblRequestBody = AlsblRequestBody;
var AlsblSecurity = /** @class */ (function (_super) {
    __extends(AlsblSecurity, _super);
    function AlsblSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AlsblSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AlsblSecurity.prototype, "clientId", void 0);
    return AlsblSecurity;
}(utils_1.SpeakeasyBase));
exports.AlsblSecurity = AlsblSecurity;
var Alsbl400ApplicationJsonErrorEnum;
(function (Alsbl400ApplicationJsonErrorEnum) {
    Alsbl400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Alsbl400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Alsbl400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Alsbl400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Alsbl400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Alsbl400ApplicationJsonErrorEnum = exports.Alsbl400ApplicationJsonErrorEnum || (exports.Alsbl400ApplicationJsonErrorEnum = {}));
var Alsbl400ApplicationJsonErrorDescriptionEnum;
(function (Alsbl400ApplicationJsonErrorDescriptionEnum) {
    Alsbl400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Alsbl400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Alsbl400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Alsbl400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Alsbl400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Alsbl400ApplicationJsonErrorDescriptionEnum = exports.Alsbl400ApplicationJsonErrorDescriptionEnum || (exports.Alsbl400ApplicationJsonErrorDescriptionEnum = {}));
var Alsbl400ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsbl400ApplicationJson, _super);
    function Alsbl400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsbl400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsbl400ApplicationJson.prototype, "errorDescription", void 0);
    return Alsbl400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsbl400ApplicationJson = Alsbl400ApplicationJson;
var Alsbl401ApplicationJsonErrorEnum;
(function (Alsbl401ApplicationJsonErrorEnum) {
    Alsbl401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Alsbl401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Alsbl401ApplicationJsonErrorEnum = exports.Alsbl401ApplicationJsonErrorEnum || (exports.Alsbl401ApplicationJsonErrorEnum = {}));
var Alsbl401ApplicationJsonErrorDescriptionEnum;
(function (Alsbl401ApplicationJsonErrorDescriptionEnum) {
    Alsbl401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Alsbl401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Alsbl401ApplicationJsonErrorDescriptionEnum = exports.Alsbl401ApplicationJsonErrorDescriptionEnum || (exports.Alsbl401ApplicationJsonErrorDescriptionEnum = {}));
var Alsbl401ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsbl401ApplicationJson, _super);
    function Alsbl401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsbl401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsbl401ApplicationJson.prototype, "errorDescription", void 0);
    return Alsbl401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsbl401ApplicationJson = Alsbl401ApplicationJson;
var Alsbl404ApplicationJsonErrorEnum;
(function (Alsbl404ApplicationJsonErrorEnum) {
    Alsbl404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Alsbl404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Alsbl404ApplicationJsonErrorEnum = exports.Alsbl404ApplicationJsonErrorEnum || (exports.Alsbl404ApplicationJsonErrorEnum = {}));
var Alsbl404ApplicationJsonErrorDescriptionEnum;
(function (Alsbl404ApplicationJsonErrorDescriptionEnum) {
    Alsbl404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Alsbl404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Alsbl404ApplicationJsonErrorDescriptionEnum = exports.Alsbl404ApplicationJsonErrorDescriptionEnum || (exports.Alsbl404ApplicationJsonErrorDescriptionEnum = {}));
var Alsbl404ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsbl404ApplicationJson, _super);
    function Alsbl404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsbl404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsbl404ApplicationJson.prototype, "errorDescription", void 0);
    return Alsbl404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsbl404ApplicationJson = Alsbl404ApplicationJson;
var Alsbl500ApplicationJsonErrorEnum;
(function (Alsbl500ApplicationJsonErrorEnum) {
    Alsbl500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Alsbl500ApplicationJsonErrorEnum = exports.Alsbl500ApplicationJsonErrorEnum || (exports.Alsbl500ApplicationJsonErrorEnum = {}));
var Alsbl500ApplicationJsonErrorDescriptionEnum;
(function (Alsbl500ApplicationJsonErrorDescriptionEnum) {
    Alsbl500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Alsbl500ApplicationJsonErrorDescriptionEnum = exports.Alsbl500ApplicationJsonErrorDescriptionEnum || (exports.Alsbl500ApplicationJsonErrorDescriptionEnum = {}));
var Alsbl500ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsbl500ApplicationJson, _super);
    function Alsbl500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsbl500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsbl500ApplicationJson.prototype, "errorDescription", void 0);
    return Alsbl500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsbl500ApplicationJson = Alsbl500ApplicationJson;
var Alsbl502ApplicationJsonErrorEnum;
(function (Alsbl502ApplicationJsonErrorEnum) {
    Alsbl502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Alsbl502ApplicationJsonErrorEnum = exports.Alsbl502ApplicationJsonErrorEnum || (exports.Alsbl502ApplicationJsonErrorEnum = {}));
var Alsbl502ApplicationJsonErrorDescriptionEnum;
(function (Alsbl502ApplicationJsonErrorDescriptionEnum) {
    Alsbl502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Alsbl502ApplicationJsonErrorDescriptionEnum = exports.Alsbl502ApplicationJsonErrorDescriptionEnum || (exports.Alsbl502ApplicationJsonErrorDescriptionEnum = {}));
var Alsbl502ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsbl502ApplicationJson, _super);
    function Alsbl502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsbl502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsbl502ApplicationJson.prototype, "errorDescription", void 0);
    return Alsbl502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsbl502ApplicationJson = Alsbl502ApplicationJson;
var Alsbl503ApplicationJsonErrorEnum;
(function (Alsbl503ApplicationJsonErrorEnum) {
    Alsbl503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Alsbl503ApplicationJsonErrorEnum = exports.Alsbl503ApplicationJsonErrorEnum || (exports.Alsbl503ApplicationJsonErrorEnum = {}));
var Alsbl503ApplicationJsonErrorDescriptionEnum;
(function (Alsbl503ApplicationJsonErrorDescriptionEnum) {
    Alsbl503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Alsbl503ApplicationJsonErrorDescriptionEnum = exports.Alsbl503ApplicationJsonErrorDescriptionEnum || (exports.Alsbl503ApplicationJsonErrorDescriptionEnum = {}));
var Alsbl503ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsbl503ApplicationJson, _super);
    function Alsbl503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsbl503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsbl503ApplicationJson.prototype, "errorDescription", void 0);
    return Alsbl503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsbl503ApplicationJson = Alsbl503ApplicationJson;
var Alsbl504ApplicationJsonErrorEnum;
(function (Alsbl504ApplicationJsonErrorEnum) {
    Alsbl504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Alsbl504ApplicationJsonErrorEnum = exports.Alsbl504ApplicationJsonErrorEnum || (exports.Alsbl504ApplicationJsonErrorEnum = {}));
var Alsbl504ApplicationJsonErrorDescriptionEnum;
(function (Alsbl504ApplicationJsonErrorDescriptionEnum) {
    Alsbl504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Alsbl504ApplicationJsonErrorDescriptionEnum = exports.Alsbl504ApplicationJsonErrorDescriptionEnum || (exports.Alsbl504ApplicationJsonErrorDescriptionEnum = {}));
var Alsbl504ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsbl504ApplicationJson, _super);
    function Alsbl504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsbl504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsbl504ApplicationJson.prototype, "errorDescription", void 0);
    return Alsbl504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsbl504ApplicationJson = Alsbl504ApplicationJson;
var AlsblRequest = /** @class */ (function (_super) {
    __extends(AlsblRequest, _super);
    function AlsblRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AlsblRequestBody)
    ], AlsblRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AlsblSecurity)
    ], AlsblRequest.prototype, "security", void 0);
    return AlsblRequest;
}(utils_1.SpeakeasyBase));
exports.AlsblRequest = AlsblRequest;
var AlsblResponse = /** @class */ (function (_super) {
    __extends(AlsblResponse, _super);
    function AlsblResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AlsblResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AlsblResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsbl400ApplicationJson)
    ], AlsblResponse.prototype, "alsbl400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsbl401ApplicationJson)
    ], AlsblResponse.prototype, "alsbl401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsbl404ApplicationJson)
    ], AlsblResponse.prototype, "alsbl404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsbl500ApplicationJson)
    ], AlsblResponse.prototype, "alsbl500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsbl502ApplicationJson)
    ], AlsblResponse.prototype, "alsbl502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsbl503ApplicationJson)
    ], AlsblResponse.prototype, "alsbl503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsbl504ApplicationJson)
    ], AlsblResponse.prototype, "alsbl504ApplicationJSONObject", void 0);
    return AlsblResponse;
}(utils_1.SpeakeasyBase));
exports.AlsblResponse = AlsblResponse;
