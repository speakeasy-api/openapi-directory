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
exports.CfmstResponse = exports.CfmstRequest = exports.Cfmst504ApplicationJson = exports.Cfmst504ApplicationJsonErrorDescriptionEnum = exports.Cfmst504ApplicationJsonErrorEnum = exports.Cfmst503ApplicationJson = exports.Cfmst503ApplicationJsonErrorDescriptionEnum = exports.Cfmst503ApplicationJsonErrorEnum = exports.Cfmst502ApplicationJson = exports.Cfmst502ApplicationJsonErrorDescriptionEnum = exports.Cfmst502ApplicationJsonErrorEnum = exports.Cfmst500ApplicationJson = exports.Cfmst500ApplicationJsonErrorDescriptionEnum = exports.Cfmst500ApplicationJsonErrorEnum = exports.Cfmst404ApplicationJson = exports.Cfmst404ApplicationJsonErrorDescriptionEnum = exports.Cfmst404ApplicationJsonErrorEnum = exports.Cfmst401ApplicationJson = exports.Cfmst401ApplicationJsonErrorDescriptionEnum = exports.Cfmst401ApplicationJsonErrorEnum = exports.Cfmst400ApplicationJson = exports.Cfmst400ApplicationJsonErrorDescriptionEnum = exports.Cfmst400ApplicationJsonErrorEnum = exports.CfmstSecurity = exports.CfmstRequestBody = exports.CfmstRequestBodyFormatEnum = exports.CfmstRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CfmstRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CfmstRequestBodyCertificateParameters, _super);
    function CfmstRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], CfmstRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], CfmstRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], CfmstRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], CfmstRequestBodyCertificateParameters.prototype, "year", void 0);
    return CfmstRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CfmstRequestBodyCertificateParameters = CfmstRequestBodyCertificateParameters;
var CfmstRequestBodyFormatEnum;
(function (CfmstRequestBodyFormatEnum) {
    CfmstRequestBodyFormatEnum["Pdf"] = "pdf";
})(CfmstRequestBodyFormatEnum = exports.CfmstRequestBodyFormatEnum || (exports.CfmstRequestBodyFormatEnum = {}));
var CfmstRequestBody = /** @class */ (function (_super) {
    __extends(CfmstRequestBody, _super);
    function CfmstRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CfmstRequestBodyCertificateParameters)
    ], CfmstRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CfmstRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CfmstRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CfmstRequestBody.prototype, "txnId", void 0);
    return CfmstRequestBody;
}(utils_1.SpeakeasyBase));
exports.CfmstRequestBody = CfmstRequestBody;
var CfmstSecurity = /** @class */ (function (_super) {
    __extends(CfmstSecurity, _super);
    function CfmstSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CfmstSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CfmstSecurity.prototype, "clientId", void 0);
    return CfmstSecurity;
}(utils_1.SpeakeasyBase));
exports.CfmstSecurity = CfmstSecurity;
var Cfmst400ApplicationJsonErrorEnum;
(function (Cfmst400ApplicationJsonErrorEnum) {
    Cfmst400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cfmst400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cfmst400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cfmst400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cfmst400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cfmst400ApplicationJsonErrorEnum = exports.Cfmst400ApplicationJsonErrorEnum || (exports.Cfmst400ApplicationJsonErrorEnum = {}));
var Cfmst400ApplicationJsonErrorDescriptionEnum;
(function (Cfmst400ApplicationJsonErrorDescriptionEnum) {
    Cfmst400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cfmst400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cfmst400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cfmst400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cfmst400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cfmst400ApplicationJsonErrorDescriptionEnum = exports.Cfmst400ApplicationJsonErrorDescriptionEnum || (exports.Cfmst400ApplicationJsonErrorDescriptionEnum = {}));
var Cfmst400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfmst400ApplicationJson, _super);
    function Cfmst400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfmst400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfmst400ApplicationJson.prototype, "errorDescription", void 0);
    return Cfmst400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfmst400ApplicationJson = Cfmst400ApplicationJson;
var Cfmst401ApplicationJsonErrorEnum;
(function (Cfmst401ApplicationJsonErrorEnum) {
    Cfmst401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cfmst401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cfmst401ApplicationJsonErrorEnum = exports.Cfmst401ApplicationJsonErrorEnum || (exports.Cfmst401ApplicationJsonErrorEnum = {}));
var Cfmst401ApplicationJsonErrorDescriptionEnum;
(function (Cfmst401ApplicationJsonErrorDescriptionEnum) {
    Cfmst401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cfmst401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cfmst401ApplicationJsonErrorDescriptionEnum = exports.Cfmst401ApplicationJsonErrorDescriptionEnum || (exports.Cfmst401ApplicationJsonErrorDescriptionEnum = {}));
var Cfmst401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfmst401ApplicationJson, _super);
    function Cfmst401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfmst401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfmst401ApplicationJson.prototype, "errorDescription", void 0);
    return Cfmst401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfmst401ApplicationJson = Cfmst401ApplicationJson;
var Cfmst404ApplicationJsonErrorEnum;
(function (Cfmst404ApplicationJsonErrorEnum) {
    Cfmst404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cfmst404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cfmst404ApplicationJsonErrorEnum = exports.Cfmst404ApplicationJsonErrorEnum || (exports.Cfmst404ApplicationJsonErrorEnum = {}));
var Cfmst404ApplicationJsonErrorDescriptionEnum;
(function (Cfmst404ApplicationJsonErrorDescriptionEnum) {
    Cfmst404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cfmst404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cfmst404ApplicationJsonErrorDescriptionEnum = exports.Cfmst404ApplicationJsonErrorDescriptionEnum || (exports.Cfmst404ApplicationJsonErrorDescriptionEnum = {}));
var Cfmst404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfmst404ApplicationJson, _super);
    function Cfmst404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfmst404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfmst404ApplicationJson.prototype, "errorDescription", void 0);
    return Cfmst404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfmst404ApplicationJson = Cfmst404ApplicationJson;
var Cfmst500ApplicationJsonErrorEnum;
(function (Cfmst500ApplicationJsonErrorEnum) {
    Cfmst500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cfmst500ApplicationJsonErrorEnum = exports.Cfmst500ApplicationJsonErrorEnum || (exports.Cfmst500ApplicationJsonErrorEnum = {}));
var Cfmst500ApplicationJsonErrorDescriptionEnum;
(function (Cfmst500ApplicationJsonErrorDescriptionEnum) {
    Cfmst500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cfmst500ApplicationJsonErrorDescriptionEnum = exports.Cfmst500ApplicationJsonErrorDescriptionEnum || (exports.Cfmst500ApplicationJsonErrorDescriptionEnum = {}));
var Cfmst500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfmst500ApplicationJson, _super);
    function Cfmst500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfmst500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfmst500ApplicationJson.prototype, "errorDescription", void 0);
    return Cfmst500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfmst500ApplicationJson = Cfmst500ApplicationJson;
var Cfmst502ApplicationJsonErrorEnum;
(function (Cfmst502ApplicationJsonErrorEnum) {
    Cfmst502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cfmst502ApplicationJsonErrorEnum = exports.Cfmst502ApplicationJsonErrorEnum || (exports.Cfmst502ApplicationJsonErrorEnum = {}));
var Cfmst502ApplicationJsonErrorDescriptionEnum;
(function (Cfmst502ApplicationJsonErrorDescriptionEnum) {
    Cfmst502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cfmst502ApplicationJsonErrorDescriptionEnum = exports.Cfmst502ApplicationJsonErrorDescriptionEnum || (exports.Cfmst502ApplicationJsonErrorDescriptionEnum = {}));
var Cfmst502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfmst502ApplicationJson, _super);
    function Cfmst502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfmst502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfmst502ApplicationJson.prototype, "errorDescription", void 0);
    return Cfmst502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfmst502ApplicationJson = Cfmst502ApplicationJson;
var Cfmst503ApplicationJsonErrorEnum;
(function (Cfmst503ApplicationJsonErrorEnum) {
    Cfmst503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cfmst503ApplicationJsonErrorEnum = exports.Cfmst503ApplicationJsonErrorEnum || (exports.Cfmst503ApplicationJsonErrorEnum = {}));
var Cfmst503ApplicationJsonErrorDescriptionEnum;
(function (Cfmst503ApplicationJsonErrorDescriptionEnum) {
    Cfmst503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cfmst503ApplicationJsonErrorDescriptionEnum = exports.Cfmst503ApplicationJsonErrorDescriptionEnum || (exports.Cfmst503ApplicationJsonErrorDescriptionEnum = {}));
var Cfmst503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfmst503ApplicationJson, _super);
    function Cfmst503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfmst503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfmst503ApplicationJson.prototype, "errorDescription", void 0);
    return Cfmst503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfmst503ApplicationJson = Cfmst503ApplicationJson;
var Cfmst504ApplicationJsonErrorEnum;
(function (Cfmst504ApplicationJsonErrorEnum) {
    Cfmst504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cfmst504ApplicationJsonErrorEnum = exports.Cfmst504ApplicationJsonErrorEnum || (exports.Cfmst504ApplicationJsonErrorEnum = {}));
var Cfmst504ApplicationJsonErrorDescriptionEnum;
(function (Cfmst504ApplicationJsonErrorDescriptionEnum) {
    Cfmst504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cfmst504ApplicationJsonErrorDescriptionEnum = exports.Cfmst504ApplicationJsonErrorDescriptionEnum || (exports.Cfmst504ApplicationJsonErrorDescriptionEnum = {}));
var Cfmst504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cfmst504ApplicationJson, _super);
    function Cfmst504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cfmst504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cfmst504ApplicationJson.prototype, "errorDescription", void 0);
    return Cfmst504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cfmst504ApplicationJson = Cfmst504ApplicationJson;
var CfmstRequest = /** @class */ (function (_super) {
    __extends(CfmstRequest, _super);
    function CfmstRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CfmstRequestBody)
    ], CfmstRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CfmstSecurity)
    ], CfmstRequest.prototype, "security", void 0);
    return CfmstRequest;
}(utils_1.SpeakeasyBase));
exports.CfmstRequest = CfmstRequest;
var CfmstResponse = /** @class */ (function (_super) {
    __extends(CfmstResponse, _super);
    function CfmstResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CfmstResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CfmstResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfmst400ApplicationJson)
    ], CfmstResponse.prototype, "cfmst400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfmst401ApplicationJson)
    ], CfmstResponse.prototype, "cfmst401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfmst404ApplicationJson)
    ], CfmstResponse.prototype, "cfmst404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfmst500ApplicationJson)
    ], CfmstResponse.prototype, "cfmst500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfmst502ApplicationJson)
    ], CfmstResponse.prototype, "cfmst502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfmst503ApplicationJson)
    ], CfmstResponse.prototype, "cfmst503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cfmst504ApplicationJson)
    ], CfmstResponse.prototype, "cfmst504ApplicationJSONObject", void 0);
    return CfmstResponse;
}(utils_1.SpeakeasyBase));
exports.CfmstResponse = CfmstResponse;
