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
exports.RatcrResponse = exports.RatcrRequest = exports.Ratcr504ApplicationJson = exports.Ratcr504ApplicationJsonErrorDescriptionEnum = exports.Ratcr504ApplicationJsonErrorEnum = exports.Ratcr503ApplicationJson = exports.Ratcr503ApplicationJsonErrorDescriptionEnum = exports.Ratcr503ApplicationJsonErrorEnum = exports.Ratcr502ApplicationJson = exports.Ratcr502ApplicationJsonErrorDescriptionEnum = exports.Ratcr502ApplicationJsonErrorEnum = exports.Ratcr500ApplicationJson = exports.Ratcr500ApplicationJsonErrorDescriptionEnum = exports.Ratcr500ApplicationJsonErrorEnum = exports.Ratcr404ApplicationJson = exports.Ratcr404ApplicationJsonErrorDescriptionEnum = exports.Ratcr404ApplicationJsonErrorEnum = exports.Ratcr401ApplicationJson = exports.Ratcr401ApplicationJsonErrorDescriptionEnum = exports.Ratcr401ApplicationJsonErrorEnum = exports.Ratcr400ApplicationJson = exports.Ratcr400ApplicationJsonErrorDescriptionEnum = exports.Ratcr400ApplicationJsonErrorEnum = exports.RatcrSecurity = exports.RatcrRequestBody = exports.RatcrRequestBodyFormatEnum = exports.RatcrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RatcrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RatcrRequestBodyCertificateParameters, _super);
    function RatcrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RatcrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], RatcrRequestBodyCertificateParameters.prototype, "uid", void 0);
    return RatcrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RatcrRequestBodyCertificateParameters = RatcrRequestBodyCertificateParameters;
var RatcrRequestBodyFormatEnum;
(function (RatcrRequestBodyFormatEnum) {
    RatcrRequestBodyFormatEnum["Pdf"] = "pdf";
})(RatcrRequestBodyFormatEnum = exports.RatcrRequestBodyFormatEnum || (exports.RatcrRequestBodyFormatEnum = {}));
var RatcrRequestBody = /** @class */ (function (_super) {
    __extends(RatcrRequestBody, _super);
    function RatcrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RatcrRequestBodyCertificateParameters)
    ], RatcrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RatcrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RatcrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RatcrRequestBody.prototype, "txnId", void 0);
    return RatcrRequestBody;
}(utils_1.SpeakeasyBase));
exports.RatcrRequestBody = RatcrRequestBody;
var RatcrSecurity = /** @class */ (function (_super) {
    __extends(RatcrSecurity, _super);
    function RatcrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RatcrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RatcrSecurity.prototype, "clientId", void 0);
    return RatcrSecurity;
}(utils_1.SpeakeasyBase));
exports.RatcrSecurity = RatcrSecurity;
var Ratcr400ApplicationJsonErrorEnum;
(function (Ratcr400ApplicationJsonErrorEnum) {
    Ratcr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ratcr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ratcr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ratcr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ratcr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ratcr400ApplicationJsonErrorEnum = exports.Ratcr400ApplicationJsonErrorEnum || (exports.Ratcr400ApplicationJsonErrorEnum = {}));
var Ratcr400ApplicationJsonErrorDescriptionEnum;
(function (Ratcr400ApplicationJsonErrorDescriptionEnum) {
    Ratcr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ratcr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ratcr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ratcr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ratcr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ratcr400ApplicationJsonErrorDescriptionEnum = exports.Ratcr400ApplicationJsonErrorDescriptionEnum || (exports.Ratcr400ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr400ApplicationJson, _super);
    function Ratcr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr400ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ratcr400ApplicationJson = Ratcr400ApplicationJson;
var Ratcr401ApplicationJsonErrorEnum;
(function (Ratcr401ApplicationJsonErrorEnum) {
    Ratcr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ratcr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ratcr401ApplicationJsonErrorEnum = exports.Ratcr401ApplicationJsonErrorEnum || (exports.Ratcr401ApplicationJsonErrorEnum = {}));
var Ratcr401ApplicationJsonErrorDescriptionEnum;
(function (Ratcr401ApplicationJsonErrorDescriptionEnum) {
    Ratcr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ratcr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ratcr401ApplicationJsonErrorDescriptionEnum = exports.Ratcr401ApplicationJsonErrorDescriptionEnum || (exports.Ratcr401ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr401ApplicationJson, _super);
    function Ratcr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr401ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ratcr401ApplicationJson = Ratcr401ApplicationJson;
var Ratcr404ApplicationJsonErrorEnum;
(function (Ratcr404ApplicationJsonErrorEnum) {
    Ratcr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ratcr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ratcr404ApplicationJsonErrorEnum = exports.Ratcr404ApplicationJsonErrorEnum || (exports.Ratcr404ApplicationJsonErrorEnum = {}));
var Ratcr404ApplicationJsonErrorDescriptionEnum;
(function (Ratcr404ApplicationJsonErrorDescriptionEnum) {
    Ratcr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ratcr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ratcr404ApplicationJsonErrorDescriptionEnum = exports.Ratcr404ApplicationJsonErrorDescriptionEnum || (exports.Ratcr404ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr404ApplicationJson, _super);
    function Ratcr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr404ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ratcr404ApplicationJson = Ratcr404ApplicationJson;
var Ratcr500ApplicationJsonErrorEnum;
(function (Ratcr500ApplicationJsonErrorEnum) {
    Ratcr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ratcr500ApplicationJsonErrorEnum = exports.Ratcr500ApplicationJsonErrorEnum || (exports.Ratcr500ApplicationJsonErrorEnum = {}));
var Ratcr500ApplicationJsonErrorDescriptionEnum;
(function (Ratcr500ApplicationJsonErrorDescriptionEnum) {
    Ratcr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ratcr500ApplicationJsonErrorDescriptionEnum = exports.Ratcr500ApplicationJsonErrorDescriptionEnum || (exports.Ratcr500ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr500ApplicationJson, _super);
    function Ratcr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr500ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ratcr500ApplicationJson = Ratcr500ApplicationJson;
var Ratcr502ApplicationJsonErrorEnum;
(function (Ratcr502ApplicationJsonErrorEnum) {
    Ratcr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ratcr502ApplicationJsonErrorEnum = exports.Ratcr502ApplicationJsonErrorEnum || (exports.Ratcr502ApplicationJsonErrorEnum = {}));
var Ratcr502ApplicationJsonErrorDescriptionEnum;
(function (Ratcr502ApplicationJsonErrorDescriptionEnum) {
    Ratcr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ratcr502ApplicationJsonErrorDescriptionEnum = exports.Ratcr502ApplicationJsonErrorDescriptionEnum || (exports.Ratcr502ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr502ApplicationJson, _super);
    function Ratcr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr502ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ratcr502ApplicationJson = Ratcr502ApplicationJson;
var Ratcr503ApplicationJsonErrorEnum;
(function (Ratcr503ApplicationJsonErrorEnum) {
    Ratcr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ratcr503ApplicationJsonErrorEnum = exports.Ratcr503ApplicationJsonErrorEnum || (exports.Ratcr503ApplicationJsonErrorEnum = {}));
var Ratcr503ApplicationJsonErrorDescriptionEnum;
(function (Ratcr503ApplicationJsonErrorDescriptionEnum) {
    Ratcr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ratcr503ApplicationJsonErrorDescriptionEnum = exports.Ratcr503ApplicationJsonErrorDescriptionEnum || (exports.Ratcr503ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr503ApplicationJson, _super);
    function Ratcr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr503ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ratcr503ApplicationJson = Ratcr503ApplicationJson;
var Ratcr504ApplicationJsonErrorEnum;
(function (Ratcr504ApplicationJsonErrorEnum) {
    Ratcr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ratcr504ApplicationJsonErrorEnum = exports.Ratcr504ApplicationJsonErrorEnum || (exports.Ratcr504ApplicationJsonErrorEnum = {}));
var Ratcr504ApplicationJsonErrorDescriptionEnum;
(function (Ratcr504ApplicationJsonErrorDescriptionEnum) {
    Ratcr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ratcr504ApplicationJsonErrorDescriptionEnum = exports.Ratcr504ApplicationJsonErrorDescriptionEnum || (exports.Ratcr504ApplicationJsonErrorDescriptionEnum = {}));
var Ratcr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ratcr504ApplicationJson, _super);
    function Ratcr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ratcr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ratcr504ApplicationJson.prototype, "errorDescription", void 0);
    return Ratcr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ratcr504ApplicationJson = Ratcr504ApplicationJson;
var RatcrRequest = /** @class */ (function (_super) {
    __extends(RatcrRequest, _super);
    function RatcrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RatcrRequestBody)
    ], RatcrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RatcrSecurity)
    ], RatcrRequest.prototype, "security", void 0);
    return RatcrRequest;
}(utils_1.SpeakeasyBase));
exports.RatcrRequest = RatcrRequest;
var RatcrResponse = /** @class */ (function (_super) {
    __extends(RatcrResponse, _super);
    function RatcrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RatcrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RatcrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ratcr400ApplicationJson)
    ], RatcrResponse.prototype, "ratcr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ratcr401ApplicationJson)
    ], RatcrResponse.prototype, "ratcr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ratcr404ApplicationJson)
    ], RatcrResponse.prototype, "ratcr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ratcr500ApplicationJson)
    ], RatcrResponse.prototype, "ratcr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ratcr502ApplicationJson)
    ], RatcrResponse.prototype, "ratcr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ratcr503ApplicationJson)
    ], RatcrResponse.prototype, "ratcr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ratcr504ApplicationJson)
    ], RatcrResponse.prototype, "ratcr504ApplicationJSONObject", void 0);
    return RatcrResponse;
}(utils_1.SpeakeasyBase));
exports.RatcrResponse = RatcrResponse;
