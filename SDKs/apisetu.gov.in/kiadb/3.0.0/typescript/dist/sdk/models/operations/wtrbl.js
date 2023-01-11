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
exports.WtrblResponse = exports.WtrblRequest = exports.Wtrbl504ApplicationJson = exports.Wtrbl504ApplicationJsonErrorDescriptionEnum = exports.Wtrbl504ApplicationJsonErrorEnum = exports.Wtrbl503ApplicationJson = exports.Wtrbl503ApplicationJsonErrorDescriptionEnum = exports.Wtrbl503ApplicationJsonErrorEnum = exports.Wtrbl502ApplicationJson = exports.Wtrbl502ApplicationJsonErrorDescriptionEnum = exports.Wtrbl502ApplicationJsonErrorEnum = exports.Wtrbl500ApplicationJson = exports.Wtrbl500ApplicationJsonErrorDescriptionEnum = exports.Wtrbl500ApplicationJsonErrorEnum = exports.Wtrbl404ApplicationJson = exports.Wtrbl404ApplicationJsonErrorDescriptionEnum = exports.Wtrbl404ApplicationJsonErrorEnum = exports.Wtrbl401ApplicationJson = exports.Wtrbl401ApplicationJsonErrorDescriptionEnum = exports.Wtrbl401ApplicationJsonErrorEnum = exports.Wtrbl400ApplicationJson = exports.Wtrbl400ApplicationJsonErrorDescriptionEnum = exports.Wtrbl400ApplicationJsonErrorEnum = exports.WtrblSecurity = exports.WtrblRequestBody = exports.WtrblRequestBodyFormatEnum = exports.WtrblRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WtrblRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(WtrblRequestBodyCertificateParameters, _super);
    function WtrblRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], WtrblRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], WtrblRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], WtrblRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], WtrblRequestBodyCertificateParameters.prototype, "uid", void 0);
    return WtrblRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.WtrblRequestBodyCertificateParameters = WtrblRequestBodyCertificateParameters;
var WtrblRequestBodyFormatEnum;
(function (WtrblRequestBodyFormatEnum) {
    WtrblRequestBodyFormatEnum["Pdf"] = "pdf";
})(WtrblRequestBodyFormatEnum = exports.WtrblRequestBodyFormatEnum || (exports.WtrblRequestBodyFormatEnum = {}));
var WtrblRequestBody = /** @class */ (function (_super) {
    __extends(WtrblRequestBody, _super);
    function WtrblRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", WtrblRequestBodyCertificateParameters)
    ], WtrblRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], WtrblRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], WtrblRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], WtrblRequestBody.prototype, "txnId", void 0);
    return WtrblRequestBody;
}(utils_1.SpeakeasyBase));
exports.WtrblRequestBody = WtrblRequestBody;
var WtrblSecurity = /** @class */ (function (_super) {
    __extends(WtrblSecurity, _super);
    function WtrblSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], WtrblSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], WtrblSecurity.prototype, "clientId", void 0);
    return WtrblSecurity;
}(utils_1.SpeakeasyBase));
exports.WtrblSecurity = WtrblSecurity;
var Wtrbl400ApplicationJsonErrorEnum;
(function (Wtrbl400ApplicationJsonErrorEnum) {
    Wtrbl400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Wtrbl400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Wtrbl400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Wtrbl400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Wtrbl400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Wtrbl400ApplicationJsonErrorEnum = exports.Wtrbl400ApplicationJsonErrorEnum || (exports.Wtrbl400ApplicationJsonErrorEnum = {}));
var Wtrbl400ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl400ApplicationJsonErrorDescriptionEnum) {
    Wtrbl400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Wtrbl400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Wtrbl400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Wtrbl400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Wtrbl400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Wtrbl400ApplicationJsonErrorDescriptionEnum = exports.Wtrbl400ApplicationJsonErrorDescriptionEnum || (exports.Wtrbl400ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl400ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl400ApplicationJson, _super);
    function Wtrbl400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl400ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wtrbl400ApplicationJson = Wtrbl400ApplicationJson;
var Wtrbl401ApplicationJsonErrorEnum;
(function (Wtrbl401ApplicationJsonErrorEnum) {
    Wtrbl401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Wtrbl401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Wtrbl401ApplicationJsonErrorEnum = exports.Wtrbl401ApplicationJsonErrorEnum || (exports.Wtrbl401ApplicationJsonErrorEnum = {}));
var Wtrbl401ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl401ApplicationJsonErrorDescriptionEnum) {
    Wtrbl401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Wtrbl401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Wtrbl401ApplicationJsonErrorDescriptionEnum = exports.Wtrbl401ApplicationJsonErrorDescriptionEnum || (exports.Wtrbl401ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl401ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl401ApplicationJson, _super);
    function Wtrbl401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl401ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wtrbl401ApplicationJson = Wtrbl401ApplicationJson;
var Wtrbl404ApplicationJsonErrorEnum;
(function (Wtrbl404ApplicationJsonErrorEnum) {
    Wtrbl404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Wtrbl404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Wtrbl404ApplicationJsonErrorEnum = exports.Wtrbl404ApplicationJsonErrorEnum || (exports.Wtrbl404ApplicationJsonErrorEnum = {}));
var Wtrbl404ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl404ApplicationJsonErrorDescriptionEnum) {
    Wtrbl404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Wtrbl404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Wtrbl404ApplicationJsonErrorDescriptionEnum = exports.Wtrbl404ApplicationJsonErrorDescriptionEnum || (exports.Wtrbl404ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl404ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl404ApplicationJson, _super);
    function Wtrbl404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl404ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wtrbl404ApplicationJson = Wtrbl404ApplicationJson;
var Wtrbl500ApplicationJsonErrorEnum;
(function (Wtrbl500ApplicationJsonErrorEnum) {
    Wtrbl500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Wtrbl500ApplicationJsonErrorEnum = exports.Wtrbl500ApplicationJsonErrorEnum || (exports.Wtrbl500ApplicationJsonErrorEnum = {}));
var Wtrbl500ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl500ApplicationJsonErrorDescriptionEnum) {
    Wtrbl500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Wtrbl500ApplicationJsonErrorDescriptionEnum = exports.Wtrbl500ApplicationJsonErrorDescriptionEnum || (exports.Wtrbl500ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl500ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl500ApplicationJson, _super);
    function Wtrbl500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl500ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wtrbl500ApplicationJson = Wtrbl500ApplicationJson;
var Wtrbl502ApplicationJsonErrorEnum;
(function (Wtrbl502ApplicationJsonErrorEnum) {
    Wtrbl502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Wtrbl502ApplicationJsonErrorEnum = exports.Wtrbl502ApplicationJsonErrorEnum || (exports.Wtrbl502ApplicationJsonErrorEnum = {}));
var Wtrbl502ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl502ApplicationJsonErrorDescriptionEnum) {
    Wtrbl502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Wtrbl502ApplicationJsonErrorDescriptionEnum = exports.Wtrbl502ApplicationJsonErrorDescriptionEnum || (exports.Wtrbl502ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl502ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl502ApplicationJson, _super);
    function Wtrbl502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl502ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wtrbl502ApplicationJson = Wtrbl502ApplicationJson;
var Wtrbl503ApplicationJsonErrorEnum;
(function (Wtrbl503ApplicationJsonErrorEnum) {
    Wtrbl503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Wtrbl503ApplicationJsonErrorEnum = exports.Wtrbl503ApplicationJsonErrorEnum || (exports.Wtrbl503ApplicationJsonErrorEnum = {}));
var Wtrbl503ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl503ApplicationJsonErrorDescriptionEnum) {
    Wtrbl503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Wtrbl503ApplicationJsonErrorDescriptionEnum = exports.Wtrbl503ApplicationJsonErrorDescriptionEnum || (exports.Wtrbl503ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl503ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl503ApplicationJson, _super);
    function Wtrbl503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl503ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wtrbl503ApplicationJson = Wtrbl503ApplicationJson;
var Wtrbl504ApplicationJsonErrorEnum;
(function (Wtrbl504ApplicationJsonErrorEnum) {
    Wtrbl504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Wtrbl504ApplicationJsonErrorEnum = exports.Wtrbl504ApplicationJsonErrorEnum || (exports.Wtrbl504ApplicationJsonErrorEnum = {}));
var Wtrbl504ApplicationJsonErrorDescriptionEnum;
(function (Wtrbl504ApplicationJsonErrorDescriptionEnum) {
    Wtrbl504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Wtrbl504ApplicationJsonErrorDescriptionEnum = exports.Wtrbl504ApplicationJsonErrorDescriptionEnum || (exports.Wtrbl504ApplicationJsonErrorDescriptionEnum = {}));
var Wtrbl504ApplicationJson = /** @class */ (function (_super) {
    __extends(Wtrbl504ApplicationJson, _super);
    function Wtrbl504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Wtrbl504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Wtrbl504ApplicationJson.prototype, "errorDescription", void 0);
    return Wtrbl504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Wtrbl504ApplicationJson = Wtrbl504ApplicationJson;
var WtrblRequest = /** @class */ (function (_super) {
    __extends(WtrblRequest, _super);
    function WtrblRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WtrblRequestBody)
    ], WtrblRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WtrblSecurity)
    ], WtrblRequest.prototype, "security", void 0);
    return WtrblRequest;
}(utils_1.SpeakeasyBase));
exports.WtrblRequest = WtrblRequest;
var WtrblResponse = /** @class */ (function (_super) {
    __extends(WtrblResponse, _super);
    function WtrblResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WtrblResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WtrblResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wtrbl400ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wtrbl401ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wtrbl404ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wtrbl500ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wtrbl502ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wtrbl503ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Wtrbl504ApplicationJson)
    ], WtrblResponse.prototype, "wtrbl504ApplicationJSONObject", void 0);
    return WtrblResponse;
}(utils_1.SpeakeasyBase));
exports.WtrblResponse = WtrblResponse;
