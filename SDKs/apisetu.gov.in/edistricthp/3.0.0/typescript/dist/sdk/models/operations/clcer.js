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
exports.ClcerResponse = exports.ClcerRequest = exports.Clcer504ApplicationJson = exports.Clcer504ApplicationJsonErrorDescriptionEnum = exports.Clcer504ApplicationJsonErrorEnum = exports.Clcer503ApplicationJson = exports.Clcer503ApplicationJsonErrorDescriptionEnum = exports.Clcer503ApplicationJsonErrorEnum = exports.Clcer502ApplicationJson = exports.Clcer502ApplicationJsonErrorDescriptionEnum = exports.Clcer502ApplicationJsonErrorEnum = exports.Clcer500ApplicationJson = exports.Clcer500ApplicationJsonErrorDescriptionEnum = exports.Clcer500ApplicationJsonErrorEnum = exports.Clcer404ApplicationJson = exports.Clcer404ApplicationJsonErrorDescriptionEnum = exports.Clcer404ApplicationJsonErrorEnum = exports.Clcer401ApplicationJson = exports.Clcer401ApplicationJsonErrorDescriptionEnum = exports.Clcer401ApplicationJsonErrorEnum = exports.Clcer400ApplicationJson = exports.Clcer400ApplicationJsonErrorDescriptionEnum = exports.Clcer400ApplicationJsonErrorEnum = exports.ClcerSecurity = exports.ClcerRequestBody = exports.ClcerRequestBodyFormatEnum = exports.ClcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ClcerRequestBodyCertificateParameters, _super);
    function ClcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], ClcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return ClcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.ClcerRequestBodyCertificateParameters = ClcerRequestBodyCertificateParameters;
var ClcerRequestBodyFormatEnum;
(function (ClcerRequestBodyFormatEnum) {
    ClcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ClcerRequestBodyFormatEnum = exports.ClcerRequestBodyFormatEnum || (exports.ClcerRequestBodyFormatEnum = {}));
var ClcerRequestBody = /** @class */ (function (_super) {
    __extends(ClcerRequestBody, _super);
    function ClcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ClcerRequestBodyCertificateParameters)
    ], ClcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ClcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ClcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ClcerRequestBody.prototype, "txnId", void 0);
    return ClcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.ClcerRequestBody = ClcerRequestBody;
var ClcerSecurity = /** @class */ (function (_super) {
    __extends(ClcerSecurity, _super);
    function ClcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ClcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ClcerSecurity.prototype, "clientId", void 0);
    return ClcerSecurity;
}(utils_1.SpeakeasyBase));
exports.ClcerSecurity = ClcerSecurity;
var Clcer400ApplicationJsonErrorEnum;
(function (Clcer400ApplicationJsonErrorEnum) {
    Clcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Clcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Clcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Clcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Clcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Clcer400ApplicationJsonErrorEnum = exports.Clcer400ApplicationJsonErrorEnum || (exports.Clcer400ApplicationJsonErrorEnum = {}));
var Clcer400ApplicationJsonErrorDescriptionEnum;
(function (Clcer400ApplicationJsonErrorDescriptionEnum) {
    Clcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Clcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Clcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Clcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Clcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Clcer400ApplicationJsonErrorDescriptionEnum = exports.Clcer400ApplicationJsonErrorDescriptionEnum || (exports.Clcer400ApplicationJsonErrorDescriptionEnum = {}));
var Clcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer400ApplicationJson, _super);
    function Clcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Clcer400ApplicationJson = Clcer400ApplicationJson;
var Clcer401ApplicationJsonErrorEnum;
(function (Clcer401ApplicationJsonErrorEnum) {
    Clcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Clcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Clcer401ApplicationJsonErrorEnum = exports.Clcer401ApplicationJsonErrorEnum || (exports.Clcer401ApplicationJsonErrorEnum = {}));
var Clcer401ApplicationJsonErrorDescriptionEnum;
(function (Clcer401ApplicationJsonErrorDescriptionEnum) {
    Clcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Clcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Clcer401ApplicationJsonErrorDescriptionEnum = exports.Clcer401ApplicationJsonErrorDescriptionEnum || (exports.Clcer401ApplicationJsonErrorDescriptionEnum = {}));
var Clcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer401ApplicationJson, _super);
    function Clcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Clcer401ApplicationJson = Clcer401ApplicationJson;
var Clcer404ApplicationJsonErrorEnum;
(function (Clcer404ApplicationJsonErrorEnum) {
    Clcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Clcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Clcer404ApplicationJsonErrorEnum = exports.Clcer404ApplicationJsonErrorEnum || (exports.Clcer404ApplicationJsonErrorEnum = {}));
var Clcer404ApplicationJsonErrorDescriptionEnum;
(function (Clcer404ApplicationJsonErrorDescriptionEnum) {
    Clcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Clcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Clcer404ApplicationJsonErrorDescriptionEnum = exports.Clcer404ApplicationJsonErrorDescriptionEnum || (exports.Clcer404ApplicationJsonErrorDescriptionEnum = {}));
var Clcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer404ApplicationJson, _super);
    function Clcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Clcer404ApplicationJson = Clcer404ApplicationJson;
var Clcer500ApplicationJsonErrorEnum;
(function (Clcer500ApplicationJsonErrorEnum) {
    Clcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Clcer500ApplicationJsonErrorEnum = exports.Clcer500ApplicationJsonErrorEnum || (exports.Clcer500ApplicationJsonErrorEnum = {}));
var Clcer500ApplicationJsonErrorDescriptionEnum;
(function (Clcer500ApplicationJsonErrorDescriptionEnum) {
    Clcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Clcer500ApplicationJsonErrorDescriptionEnum = exports.Clcer500ApplicationJsonErrorDescriptionEnum || (exports.Clcer500ApplicationJsonErrorDescriptionEnum = {}));
var Clcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer500ApplicationJson, _super);
    function Clcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Clcer500ApplicationJson = Clcer500ApplicationJson;
var Clcer502ApplicationJsonErrorEnum;
(function (Clcer502ApplicationJsonErrorEnum) {
    Clcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Clcer502ApplicationJsonErrorEnum = exports.Clcer502ApplicationJsonErrorEnum || (exports.Clcer502ApplicationJsonErrorEnum = {}));
var Clcer502ApplicationJsonErrorDescriptionEnum;
(function (Clcer502ApplicationJsonErrorDescriptionEnum) {
    Clcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Clcer502ApplicationJsonErrorDescriptionEnum = exports.Clcer502ApplicationJsonErrorDescriptionEnum || (exports.Clcer502ApplicationJsonErrorDescriptionEnum = {}));
var Clcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer502ApplicationJson, _super);
    function Clcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Clcer502ApplicationJson = Clcer502ApplicationJson;
var Clcer503ApplicationJsonErrorEnum;
(function (Clcer503ApplicationJsonErrorEnum) {
    Clcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Clcer503ApplicationJsonErrorEnum = exports.Clcer503ApplicationJsonErrorEnum || (exports.Clcer503ApplicationJsonErrorEnum = {}));
var Clcer503ApplicationJsonErrorDescriptionEnum;
(function (Clcer503ApplicationJsonErrorDescriptionEnum) {
    Clcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Clcer503ApplicationJsonErrorDescriptionEnum = exports.Clcer503ApplicationJsonErrorDescriptionEnum || (exports.Clcer503ApplicationJsonErrorDescriptionEnum = {}));
var Clcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer503ApplicationJson, _super);
    function Clcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Clcer503ApplicationJson = Clcer503ApplicationJson;
var Clcer504ApplicationJsonErrorEnum;
(function (Clcer504ApplicationJsonErrorEnum) {
    Clcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Clcer504ApplicationJsonErrorEnum = exports.Clcer504ApplicationJsonErrorEnum || (exports.Clcer504ApplicationJsonErrorEnum = {}));
var Clcer504ApplicationJsonErrorDescriptionEnum;
(function (Clcer504ApplicationJsonErrorDescriptionEnum) {
    Clcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Clcer504ApplicationJsonErrorDescriptionEnum = exports.Clcer504ApplicationJsonErrorDescriptionEnum || (exports.Clcer504ApplicationJsonErrorDescriptionEnum = {}));
var Clcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Clcer504ApplicationJson, _super);
    function Clcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Clcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Clcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Clcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Clcer504ApplicationJson = Clcer504ApplicationJson;
var ClcerRequest = /** @class */ (function (_super) {
    __extends(ClcerRequest, _super);
    function ClcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ClcerRequestBody)
    ], ClcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClcerSecurity)
    ], ClcerRequest.prototype, "security", void 0);
    return ClcerRequest;
}(utils_1.SpeakeasyBase));
exports.ClcerRequest = ClcerRequest;
var ClcerResponse = /** @class */ (function (_super) {
    __extends(ClcerResponse, _super);
    function ClcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Clcer400ApplicationJson)
    ], ClcerResponse.prototype, "clcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Clcer401ApplicationJson)
    ], ClcerResponse.prototype, "clcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Clcer404ApplicationJson)
    ], ClcerResponse.prototype, "clcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Clcer500ApplicationJson)
    ], ClcerResponse.prototype, "clcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Clcer502ApplicationJson)
    ], ClcerResponse.prototype, "clcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Clcer503ApplicationJson)
    ], ClcerResponse.prototype, "clcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Clcer504ApplicationJson)
    ], ClcerResponse.prototype, "clcer504ApplicationJSONObject", void 0);
    return ClcerResponse;
}(utils_1.SpeakeasyBase));
exports.ClcerResponse = ClcerResponse;
