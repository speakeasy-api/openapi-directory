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
exports.ObcerResponse = exports.ObcerRequest = exports.Obcer504ApplicationJson = exports.Obcer504ApplicationJsonErrorDescriptionEnum = exports.Obcer504ApplicationJsonErrorEnum = exports.Obcer503ApplicationJson = exports.Obcer503ApplicationJsonErrorDescriptionEnum = exports.Obcer503ApplicationJsonErrorEnum = exports.Obcer502ApplicationJson = exports.Obcer502ApplicationJsonErrorDescriptionEnum = exports.Obcer502ApplicationJsonErrorEnum = exports.Obcer500ApplicationJson = exports.Obcer500ApplicationJsonErrorDescriptionEnum = exports.Obcer500ApplicationJsonErrorEnum = exports.Obcer404ApplicationJson = exports.Obcer404ApplicationJsonErrorDescriptionEnum = exports.Obcer404ApplicationJsonErrorEnum = exports.Obcer401ApplicationJson = exports.Obcer401ApplicationJsonErrorDescriptionEnum = exports.Obcer401ApplicationJsonErrorEnum = exports.Obcer400ApplicationJson = exports.Obcer400ApplicationJsonErrorDescriptionEnum = exports.Obcer400ApplicationJsonErrorEnum = exports.ObcerSecurity = exports.ObcerRequestBody = exports.ObcerRequestBodyFormatEnum = exports.ObcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ObcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ObcerRequestBodyCertificateParameters, _super);
    function ObcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], ObcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return ObcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.ObcerRequestBodyCertificateParameters = ObcerRequestBodyCertificateParameters;
var ObcerRequestBodyFormatEnum;
(function (ObcerRequestBodyFormatEnum) {
    ObcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ObcerRequestBodyFormatEnum = exports.ObcerRequestBodyFormatEnum || (exports.ObcerRequestBodyFormatEnum = {}));
var ObcerRequestBody = /** @class */ (function (_super) {
    __extends(ObcerRequestBody, _super);
    function ObcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ObcerRequestBodyCertificateParameters)
    ], ObcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ObcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ObcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ObcerRequestBody.prototype, "txnId", void 0);
    return ObcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.ObcerRequestBody = ObcerRequestBody;
var ObcerSecurity = /** @class */ (function (_super) {
    __extends(ObcerSecurity, _super);
    function ObcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ObcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ObcerSecurity.prototype, "clientId", void 0);
    return ObcerSecurity;
}(utils_1.SpeakeasyBase));
exports.ObcerSecurity = ObcerSecurity;
var Obcer400ApplicationJsonErrorEnum;
(function (Obcer400ApplicationJsonErrorEnum) {
    Obcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Obcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Obcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Obcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Obcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Obcer400ApplicationJsonErrorEnum = exports.Obcer400ApplicationJsonErrorEnum || (exports.Obcer400ApplicationJsonErrorEnum = {}));
var Obcer400ApplicationJsonErrorDescriptionEnum;
(function (Obcer400ApplicationJsonErrorDescriptionEnum) {
    Obcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Obcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Obcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Obcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Obcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Obcer400ApplicationJsonErrorDescriptionEnum = exports.Obcer400ApplicationJsonErrorDescriptionEnum || (exports.Obcer400ApplicationJsonErrorDescriptionEnum = {}));
var Obcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer400ApplicationJson, _super);
    function Obcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Obcer400ApplicationJson = Obcer400ApplicationJson;
var Obcer401ApplicationJsonErrorEnum;
(function (Obcer401ApplicationJsonErrorEnum) {
    Obcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Obcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Obcer401ApplicationJsonErrorEnum = exports.Obcer401ApplicationJsonErrorEnum || (exports.Obcer401ApplicationJsonErrorEnum = {}));
var Obcer401ApplicationJsonErrorDescriptionEnum;
(function (Obcer401ApplicationJsonErrorDescriptionEnum) {
    Obcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Obcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Obcer401ApplicationJsonErrorDescriptionEnum = exports.Obcer401ApplicationJsonErrorDescriptionEnum || (exports.Obcer401ApplicationJsonErrorDescriptionEnum = {}));
var Obcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer401ApplicationJson, _super);
    function Obcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Obcer401ApplicationJson = Obcer401ApplicationJson;
var Obcer404ApplicationJsonErrorEnum;
(function (Obcer404ApplicationJsonErrorEnum) {
    Obcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Obcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Obcer404ApplicationJsonErrorEnum = exports.Obcer404ApplicationJsonErrorEnum || (exports.Obcer404ApplicationJsonErrorEnum = {}));
var Obcer404ApplicationJsonErrorDescriptionEnum;
(function (Obcer404ApplicationJsonErrorDescriptionEnum) {
    Obcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Obcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Obcer404ApplicationJsonErrorDescriptionEnum = exports.Obcer404ApplicationJsonErrorDescriptionEnum || (exports.Obcer404ApplicationJsonErrorDescriptionEnum = {}));
var Obcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer404ApplicationJson, _super);
    function Obcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Obcer404ApplicationJson = Obcer404ApplicationJson;
var Obcer500ApplicationJsonErrorEnum;
(function (Obcer500ApplicationJsonErrorEnum) {
    Obcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Obcer500ApplicationJsonErrorEnum = exports.Obcer500ApplicationJsonErrorEnum || (exports.Obcer500ApplicationJsonErrorEnum = {}));
var Obcer500ApplicationJsonErrorDescriptionEnum;
(function (Obcer500ApplicationJsonErrorDescriptionEnum) {
    Obcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Obcer500ApplicationJsonErrorDescriptionEnum = exports.Obcer500ApplicationJsonErrorDescriptionEnum || (exports.Obcer500ApplicationJsonErrorDescriptionEnum = {}));
var Obcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer500ApplicationJson, _super);
    function Obcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Obcer500ApplicationJson = Obcer500ApplicationJson;
var Obcer502ApplicationJsonErrorEnum;
(function (Obcer502ApplicationJsonErrorEnum) {
    Obcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Obcer502ApplicationJsonErrorEnum = exports.Obcer502ApplicationJsonErrorEnum || (exports.Obcer502ApplicationJsonErrorEnum = {}));
var Obcer502ApplicationJsonErrorDescriptionEnum;
(function (Obcer502ApplicationJsonErrorDescriptionEnum) {
    Obcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Obcer502ApplicationJsonErrorDescriptionEnum = exports.Obcer502ApplicationJsonErrorDescriptionEnum || (exports.Obcer502ApplicationJsonErrorDescriptionEnum = {}));
var Obcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer502ApplicationJson, _super);
    function Obcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Obcer502ApplicationJson = Obcer502ApplicationJson;
var Obcer503ApplicationJsonErrorEnum;
(function (Obcer503ApplicationJsonErrorEnum) {
    Obcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Obcer503ApplicationJsonErrorEnum = exports.Obcer503ApplicationJsonErrorEnum || (exports.Obcer503ApplicationJsonErrorEnum = {}));
var Obcer503ApplicationJsonErrorDescriptionEnum;
(function (Obcer503ApplicationJsonErrorDescriptionEnum) {
    Obcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Obcer503ApplicationJsonErrorDescriptionEnum = exports.Obcer503ApplicationJsonErrorDescriptionEnum || (exports.Obcer503ApplicationJsonErrorDescriptionEnum = {}));
var Obcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer503ApplicationJson, _super);
    function Obcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Obcer503ApplicationJson = Obcer503ApplicationJson;
var Obcer504ApplicationJsonErrorEnum;
(function (Obcer504ApplicationJsonErrorEnum) {
    Obcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Obcer504ApplicationJsonErrorEnum = exports.Obcer504ApplicationJsonErrorEnum || (exports.Obcer504ApplicationJsonErrorEnum = {}));
var Obcer504ApplicationJsonErrorDescriptionEnum;
(function (Obcer504ApplicationJsonErrorDescriptionEnum) {
    Obcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Obcer504ApplicationJsonErrorDescriptionEnum = exports.Obcer504ApplicationJsonErrorDescriptionEnum || (exports.Obcer504ApplicationJsonErrorDescriptionEnum = {}));
var Obcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Obcer504ApplicationJson, _super);
    function Obcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Obcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Obcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Obcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Obcer504ApplicationJson = Obcer504ApplicationJson;
var ObcerRequest = /** @class */ (function (_super) {
    __extends(ObcerRequest, _super);
    function ObcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ObcerRequestBody)
    ], ObcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ObcerSecurity)
    ], ObcerRequest.prototype, "security", void 0);
    return ObcerRequest;
}(utils_1.SpeakeasyBase));
exports.ObcerRequest = ObcerRequest;
var ObcerResponse = /** @class */ (function (_super) {
    __extends(ObcerResponse, _super);
    function ObcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ObcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ObcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Obcer400ApplicationJson)
    ], ObcerResponse.prototype, "obcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Obcer401ApplicationJson)
    ], ObcerResponse.prototype, "obcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Obcer404ApplicationJson)
    ], ObcerResponse.prototype, "obcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Obcer500ApplicationJson)
    ], ObcerResponse.prototype, "obcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Obcer502ApplicationJson)
    ], ObcerResponse.prototype, "obcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Obcer503ApplicationJson)
    ], ObcerResponse.prototype, "obcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Obcer504ApplicationJson)
    ], ObcerResponse.prototype, "obcer504ApplicationJSONObject", void 0);
    return ObcerResponse;
}(utils_1.SpeakeasyBase));
exports.ObcerResponse = ObcerResponse;
