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
exports.RmcerResponse = exports.RmcerRequest = exports.Rmcer504ApplicationJson = exports.Rmcer504ApplicationJsonErrorDescriptionEnum = exports.Rmcer504ApplicationJsonErrorEnum = exports.Rmcer503ApplicationJson = exports.Rmcer503ApplicationJsonErrorDescriptionEnum = exports.Rmcer503ApplicationJsonErrorEnum = exports.Rmcer502ApplicationJson = exports.Rmcer502ApplicationJsonErrorDescriptionEnum = exports.Rmcer502ApplicationJsonErrorEnum = exports.Rmcer500ApplicationJson = exports.Rmcer500ApplicationJsonErrorDescriptionEnum = exports.Rmcer500ApplicationJsonErrorEnum = exports.Rmcer404ApplicationJson = exports.Rmcer404ApplicationJsonErrorDescriptionEnum = exports.Rmcer404ApplicationJsonErrorEnum = exports.Rmcer401ApplicationJson = exports.Rmcer401ApplicationJsonErrorDescriptionEnum = exports.Rmcer401ApplicationJsonErrorEnum = exports.Rmcer400ApplicationJson = exports.Rmcer400ApplicationJsonErrorDescriptionEnum = exports.Rmcer400ApplicationJsonErrorEnum = exports.RmcerSecurity = exports.RmcerRequestBody = exports.RmcerRequestBodyFormatEnum = exports.RmcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RmcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RmcerRequestBodyCertificateParameters, _super);
    function RmcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DateofEvent" }),
        __metadata("design:type", String)
    ], RmcerRequestBodyCertificateParameters.prototype, "dateofEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RegisNumber" }),
        __metadata("design:type", String)
    ], RmcerRequestBodyCertificateParameters.prototype, "regisNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Year" }),
        __metadata("design:type", String)
    ], RmcerRequestBodyCertificateParameters.prototype, "year", void 0);
    return RmcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RmcerRequestBodyCertificateParameters = RmcerRequestBodyCertificateParameters;
var RmcerRequestBodyFormatEnum;
(function (RmcerRequestBodyFormatEnum) {
    RmcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RmcerRequestBodyFormatEnum = exports.RmcerRequestBodyFormatEnum || (exports.RmcerRequestBodyFormatEnum = {}));
var RmcerRequestBody = /** @class */ (function (_super) {
    __extends(RmcerRequestBody, _super);
    function RmcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RmcerRequestBodyCertificateParameters)
    ], RmcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RmcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RmcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RmcerRequestBody.prototype, "txnId", void 0);
    return RmcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RmcerRequestBody = RmcerRequestBody;
var RmcerSecurity = /** @class */ (function (_super) {
    __extends(RmcerSecurity, _super);
    function RmcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RmcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RmcerSecurity.prototype, "clientId", void 0);
    return RmcerSecurity;
}(utils_1.SpeakeasyBase));
exports.RmcerSecurity = RmcerSecurity;
var Rmcer400ApplicationJsonErrorEnum;
(function (Rmcer400ApplicationJsonErrorEnum) {
    Rmcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rmcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rmcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rmcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rmcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rmcer400ApplicationJsonErrorEnum = exports.Rmcer400ApplicationJsonErrorEnum || (exports.Rmcer400ApplicationJsonErrorEnum = {}));
var Rmcer400ApplicationJsonErrorDescriptionEnum;
(function (Rmcer400ApplicationJsonErrorDescriptionEnum) {
    Rmcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rmcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rmcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rmcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rmcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rmcer400ApplicationJsonErrorDescriptionEnum = exports.Rmcer400ApplicationJsonErrorDescriptionEnum || (exports.Rmcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rmcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rmcer400ApplicationJson, _super);
    function Rmcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rmcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rmcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rmcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rmcer400ApplicationJson = Rmcer400ApplicationJson;
var Rmcer401ApplicationJsonErrorEnum;
(function (Rmcer401ApplicationJsonErrorEnum) {
    Rmcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rmcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rmcer401ApplicationJsonErrorEnum = exports.Rmcer401ApplicationJsonErrorEnum || (exports.Rmcer401ApplicationJsonErrorEnum = {}));
var Rmcer401ApplicationJsonErrorDescriptionEnum;
(function (Rmcer401ApplicationJsonErrorDescriptionEnum) {
    Rmcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rmcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rmcer401ApplicationJsonErrorDescriptionEnum = exports.Rmcer401ApplicationJsonErrorDescriptionEnum || (exports.Rmcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rmcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rmcer401ApplicationJson, _super);
    function Rmcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rmcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rmcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rmcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rmcer401ApplicationJson = Rmcer401ApplicationJson;
var Rmcer404ApplicationJsonErrorEnum;
(function (Rmcer404ApplicationJsonErrorEnum) {
    Rmcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rmcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rmcer404ApplicationJsonErrorEnum = exports.Rmcer404ApplicationJsonErrorEnum || (exports.Rmcer404ApplicationJsonErrorEnum = {}));
var Rmcer404ApplicationJsonErrorDescriptionEnum;
(function (Rmcer404ApplicationJsonErrorDescriptionEnum) {
    Rmcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rmcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rmcer404ApplicationJsonErrorDescriptionEnum = exports.Rmcer404ApplicationJsonErrorDescriptionEnum || (exports.Rmcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rmcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rmcer404ApplicationJson, _super);
    function Rmcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rmcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rmcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rmcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rmcer404ApplicationJson = Rmcer404ApplicationJson;
var Rmcer500ApplicationJsonErrorEnum;
(function (Rmcer500ApplicationJsonErrorEnum) {
    Rmcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rmcer500ApplicationJsonErrorEnum = exports.Rmcer500ApplicationJsonErrorEnum || (exports.Rmcer500ApplicationJsonErrorEnum = {}));
var Rmcer500ApplicationJsonErrorDescriptionEnum;
(function (Rmcer500ApplicationJsonErrorDescriptionEnum) {
    Rmcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rmcer500ApplicationJsonErrorDescriptionEnum = exports.Rmcer500ApplicationJsonErrorDescriptionEnum || (exports.Rmcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rmcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rmcer500ApplicationJson, _super);
    function Rmcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rmcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rmcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rmcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rmcer500ApplicationJson = Rmcer500ApplicationJson;
var Rmcer502ApplicationJsonErrorEnum;
(function (Rmcer502ApplicationJsonErrorEnum) {
    Rmcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rmcer502ApplicationJsonErrorEnum = exports.Rmcer502ApplicationJsonErrorEnum || (exports.Rmcer502ApplicationJsonErrorEnum = {}));
var Rmcer502ApplicationJsonErrorDescriptionEnum;
(function (Rmcer502ApplicationJsonErrorDescriptionEnum) {
    Rmcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rmcer502ApplicationJsonErrorDescriptionEnum = exports.Rmcer502ApplicationJsonErrorDescriptionEnum || (exports.Rmcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rmcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rmcer502ApplicationJson, _super);
    function Rmcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rmcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rmcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rmcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rmcer502ApplicationJson = Rmcer502ApplicationJson;
var Rmcer503ApplicationJsonErrorEnum;
(function (Rmcer503ApplicationJsonErrorEnum) {
    Rmcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rmcer503ApplicationJsonErrorEnum = exports.Rmcer503ApplicationJsonErrorEnum || (exports.Rmcer503ApplicationJsonErrorEnum = {}));
var Rmcer503ApplicationJsonErrorDescriptionEnum;
(function (Rmcer503ApplicationJsonErrorDescriptionEnum) {
    Rmcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rmcer503ApplicationJsonErrorDescriptionEnum = exports.Rmcer503ApplicationJsonErrorDescriptionEnum || (exports.Rmcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rmcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rmcer503ApplicationJson, _super);
    function Rmcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rmcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rmcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rmcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rmcer503ApplicationJson = Rmcer503ApplicationJson;
var Rmcer504ApplicationJsonErrorEnum;
(function (Rmcer504ApplicationJsonErrorEnum) {
    Rmcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rmcer504ApplicationJsonErrorEnum = exports.Rmcer504ApplicationJsonErrorEnum || (exports.Rmcer504ApplicationJsonErrorEnum = {}));
var Rmcer504ApplicationJsonErrorDescriptionEnum;
(function (Rmcer504ApplicationJsonErrorDescriptionEnum) {
    Rmcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rmcer504ApplicationJsonErrorDescriptionEnum = exports.Rmcer504ApplicationJsonErrorDescriptionEnum || (exports.Rmcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rmcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rmcer504ApplicationJson, _super);
    function Rmcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rmcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rmcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rmcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rmcer504ApplicationJson = Rmcer504ApplicationJson;
var RmcerRequest = /** @class */ (function (_super) {
    __extends(RmcerRequest, _super);
    function RmcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RmcerRequestBody)
    ], RmcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RmcerSecurity)
    ], RmcerRequest.prototype, "security", void 0);
    return RmcerRequest;
}(utils_1.SpeakeasyBase));
exports.RmcerRequest = RmcerRequest;
var RmcerResponse = /** @class */ (function (_super) {
    __extends(RmcerResponse, _super);
    function RmcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RmcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RmcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rmcer400ApplicationJson)
    ], RmcerResponse.prototype, "rmcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rmcer401ApplicationJson)
    ], RmcerResponse.prototype, "rmcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rmcer404ApplicationJson)
    ], RmcerResponse.prototype, "rmcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rmcer500ApplicationJson)
    ], RmcerResponse.prototype, "rmcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rmcer502ApplicationJson)
    ], RmcerResponse.prototype, "rmcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rmcer503ApplicationJson)
    ], RmcerResponse.prototype, "rmcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rmcer504ApplicationJson)
    ], RmcerResponse.prototype, "rmcer504ApplicationJSONObject", void 0);
    return RmcerResponse;
}(utils_1.SpeakeasyBase));
exports.RmcerResponse = RmcerResponse;
