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
exports.DgmstResponse = exports.DgmstRequest = exports.Dgmst504ApplicationJson = exports.Dgmst504ApplicationJsonErrorDescriptionEnum = exports.Dgmst504ApplicationJsonErrorEnum = exports.Dgmst503ApplicationJson = exports.Dgmst503ApplicationJsonErrorDescriptionEnum = exports.Dgmst503ApplicationJsonErrorEnum = exports.Dgmst502ApplicationJson = exports.Dgmst502ApplicationJsonErrorDescriptionEnum = exports.Dgmst502ApplicationJsonErrorEnum = exports.Dgmst500ApplicationJson = exports.Dgmst500ApplicationJsonErrorDescriptionEnum = exports.Dgmst500ApplicationJsonErrorEnum = exports.Dgmst404ApplicationJson = exports.Dgmst404ApplicationJsonErrorDescriptionEnum = exports.Dgmst404ApplicationJsonErrorEnum = exports.Dgmst401ApplicationJson = exports.Dgmst401ApplicationJsonErrorDescriptionEnum = exports.Dgmst401ApplicationJsonErrorEnum = exports.Dgmst400ApplicationJson = exports.Dgmst400ApplicationJsonErrorDescriptionEnum = exports.Dgmst400ApplicationJsonErrorEnum = exports.DgmstSecurity = exports.DgmstRequestBody = exports.DgmstRequestBodyFormatEnum = exports.DgmstRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DgmstRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DgmstRequestBodyCertificateParameters, _super);
    function DgmstRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RROLL" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "rroll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SEM" }),
        __metadata("design:type", String)
    ], DgmstRequestBodyCertificateParameters.prototype, "sem", void 0);
    return DgmstRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DgmstRequestBodyCertificateParameters = DgmstRequestBodyCertificateParameters;
var DgmstRequestBodyFormatEnum;
(function (DgmstRequestBodyFormatEnum) {
    DgmstRequestBodyFormatEnum["Pdf"] = "pdf";
})(DgmstRequestBodyFormatEnum = exports.DgmstRequestBodyFormatEnum || (exports.DgmstRequestBodyFormatEnum = {}));
var DgmstRequestBody = /** @class */ (function (_super) {
    __extends(DgmstRequestBody, _super);
    function DgmstRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DgmstRequestBodyCertificateParameters)
    ], DgmstRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DgmstRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DgmstRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DgmstRequestBody.prototype, "txnId", void 0);
    return DgmstRequestBody;
}(utils_1.SpeakeasyBase));
exports.DgmstRequestBody = DgmstRequestBody;
var DgmstSecurity = /** @class */ (function (_super) {
    __extends(DgmstSecurity, _super);
    function DgmstSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DgmstSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DgmstSecurity.prototype, "clientId", void 0);
    return DgmstSecurity;
}(utils_1.SpeakeasyBase));
exports.DgmstSecurity = DgmstSecurity;
var Dgmst400ApplicationJsonErrorEnum;
(function (Dgmst400ApplicationJsonErrorEnum) {
    Dgmst400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dgmst400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dgmst400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dgmst400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dgmst400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dgmst400ApplicationJsonErrorEnum = exports.Dgmst400ApplicationJsonErrorEnum || (exports.Dgmst400ApplicationJsonErrorEnum = {}));
var Dgmst400ApplicationJsonErrorDescriptionEnum;
(function (Dgmst400ApplicationJsonErrorDescriptionEnum) {
    Dgmst400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dgmst400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dgmst400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dgmst400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dgmst400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dgmst400ApplicationJsonErrorDescriptionEnum = exports.Dgmst400ApplicationJsonErrorDescriptionEnum || (exports.Dgmst400ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst400ApplicationJson, _super);
    function Dgmst400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst400ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgmst400ApplicationJson = Dgmst400ApplicationJson;
var Dgmst401ApplicationJsonErrorEnum;
(function (Dgmst401ApplicationJsonErrorEnum) {
    Dgmst401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dgmst401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dgmst401ApplicationJsonErrorEnum = exports.Dgmst401ApplicationJsonErrorEnum || (exports.Dgmst401ApplicationJsonErrorEnum = {}));
var Dgmst401ApplicationJsonErrorDescriptionEnum;
(function (Dgmst401ApplicationJsonErrorDescriptionEnum) {
    Dgmst401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dgmst401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dgmst401ApplicationJsonErrorDescriptionEnum = exports.Dgmst401ApplicationJsonErrorDescriptionEnum || (exports.Dgmst401ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst401ApplicationJson, _super);
    function Dgmst401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst401ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgmst401ApplicationJson = Dgmst401ApplicationJson;
var Dgmst404ApplicationJsonErrorEnum;
(function (Dgmst404ApplicationJsonErrorEnum) {
    Dgmst404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dgmst404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dgmst404ApplicationJsonErrorEnum = exports.Dgmst404ApplicationJsonErrorEnum || (exports.Dgmst404ApplicationJsonErrorEnum = {}));
var Dgmst404ApplicationJsonErrorDescriptionEnum;
(function (Dgmst404ApplicationJsonErrorDescriptionEnum) {
    Dgmst404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dgmst404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dgmst404ApplicationJsonErrorDescriptionEnum = exports.Dgmst404ApplicationJsonErrorDescriptionEnum || (exports.Dgmst404ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst404ApplicationJson, _super);
    function Dgmst404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst404ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgmst404ApplicationJson = Dgmst404ApplicationJson;
var Dgmst500ApplicationJsonErrorEnum;
(function (Dgmst500ApplicationJsonErrorEnum) {
    Dgmst500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dgmst500ApplicationJsonErrorEnum = exports.Dgmst500ApplicationJsonErrorEnum || (exports.Dgmst500ApplicationJsonErrorEnum = {}));
var Dgmst500ApplicationJsonErrorDescriptionEnum;
(function (Dgmst500ApplicationJsonErrorDescriptionEnum) {
    Dgmst500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dgmst500ApplicationJsonErrorDescriptionEnum = exports.Dgmst500ApplicationJsonErrorDescriptionEnum || (exports.Dgmst500ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst500ApplicationJson, _super);
    function Dgmst500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst500ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgmst500ApplicationJson = Dgmst500ApplicationJson;
var Dgmst502ApplicationJsonErrorEnum;
(function (Dgmst502ApplicationJsonErrorEnum) {
    Dgmst502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dgmst502ApplicationJsonErrorEnum = exports.Dgmst502ApplicationJsonErrorEnum || (exports.Dgmst502ApplicationJsonErrorEnum = {}));
var Dgmst502ApplicationJsonErrorDescriptionEnum;
(function (Dgmst502ApplicationJsonErrorDescriptionEnum) {
    Dgmst502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dgmst502ApplicationJsonErrorDescriptionEnum = exports.Dgmst502ApplicationJsonErrorDescriptionEnum || (exports.Dgmst502ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst502ApplicationJson, _super);
    function Dgmst502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst502ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgmst502ApplicationJson = Dgmst502ApplicationJson;
var Dgmst503ApplicationJsonErrorEnum;
(function (Dgmst503ApplicationJsonErrorEnum) {
    Dgmst503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dgmst503ApplicationJsonErrorEnum = exports.Dgmst503ApplicationJsonErrorEnum || (exports.Dgmst503ApplicationJsonErrorEnum = {}));
var Dgmst503ApplicationJsonErrorDescriptionEnum;
(function (Dgmst503ApplicationJsonErrorDescriptionEnum) {
    Dgmst503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dgmst503ApplicationJsonErrorDescriptionEnum = exports.Dgmst503ApplicationJsonErrorDescriptionEnum || (exports.Dgmst503ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst503ApplicationJson, _super);
    function Dgmst503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst503ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgmst503ApplicationJson = Dgmst503ApplicationJson;
var Dgmst504ApplicationJsonErrorEnum;
(function (Dgmst504ApplicationJsonErrorEnum) {
    Dgmst504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dgmst504ApplicationJsonErrorEnum = exports.Dgmst504ApplicationJsonErrorEnum || (exports.Dgmst504ApplicationJsonErrorEnum = {}));
var Dgmst504ApplicationJsonErrorDescriptionEnum;
(function (Dgmst504ApplicationJsonErrorDescriptionEnum) {
    Dgmst504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dgmst504ApplicationJsonErrorDescriptionEnum = exports.Dgmst504ApplicationJsonErrorDescriptionEnum || (exports.Dgmst504ApplicationJsonErrorDescriptionEnum = {}));
var Dgmst504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dgmst504ApplicationJson, _super);
    function Dgmst504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dgmst504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dgmst504ApplicationJson.prototype, "errorDescription", void 0);
    return Dgmst504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dgmst504ApplicationJson = Dgmst504ApplicationJson;
var DgmstRequest = /** @class */ (function (_super) {
    __extends(DgmstRequest, _super);
    function DgmstRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DgmstRequestBody)
    ], DgmstRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DgmstSecurity)
    ], DgmstRequest.prototype, "security", void 0);
    return DgmstRequest;
}(utils_1.SpeakeasyBase));
exports.DgmstRequest = DgmstRequest;
var DgmstResponse = /** @class */ (function (_super) {
    __extends(DgmstResponse, _super);
    function DgmstResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DgmstResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DgmstResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgmst400ApplicationJson)
    ], DgmstResponse.prototype, "dgmst400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgmst401ApplicationJson)
    ], DgmstResponse.prototype, "dgmst401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgmst404ApplicationJson)
    ], DgmstResponse.prototype, "dgmst404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgmst500ApplicationJson)
    ], DgmstResponse.prototype, "dgmst500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgmst502ApplicationJson)
    ], DgmstResponse.prototype, "dgmst502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgmst503ApplicationJson)
    ], DgmstResponse.prototype, "dgmst503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dgmst504ApplicationJson)
    ], DgmstResponse.prototype, "dgmst504ApplicationJSONObject", void 0);
    return DgmstResponse;
}(utils_1.SpeakeasyBase));
exports.DgmstResponse = DgmstResponse;
