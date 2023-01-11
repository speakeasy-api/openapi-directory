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
exports.RelcsResponse = exports.RelcsRequest = exports.Relcs504ApplicationJson = exports.Relcs504ApplicationJsonErrorDescriptionEnum = exports.Relcs504ApplicationJsonErrorEnum = exports.Relcs503ApplicationJson = exports.Relcs503ApplicationJsonErrorDescriptionEnum = exports.Relcs503ApplicationJsonErrorEnum = exports.Relcs502ApplicationJson = exports.Relcs502ApplicationJsonErrorDescriptionEnum = exports.Relcs502ApplicationJsonErrorEnum = exports.Relcs500ApplicationJson = exports.Relcs500ApplicationJsonErrorDescriptionEnum = exports.Relcs500ApplicationJsonErrorEnum = exports.Relcs404ApplicationJson = exports.Relcs404ApplicationJsonErrorDescriptionEnum = exports.Relcs404ApplicationJsonErrorEnum = exports.Relcs401ApplicationJson = exports.Relcs401ApplicationJsonErrorDescriptionEnum = exports.Relcs401ApplicationJsonErrorEnum = exports.Relcs400ApplicationJson = exports.Relcs400ApplicationJsonErrorDescriptionEnum = exports.Relcs400ApplicationJsonErrorEnum = exports.RelcsSecurity = exports.RelcsRequestBody = exports.RelcsRequestBodyFormatEnum = exports.RelcsRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RelcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RelcsRequestBodyCertificateParameters, _super);
    function RelcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applicationNo" }),
        __metadata("design:type", String)
    ], RelcsRequestBodyCertificateParameters.prototype, "applicationNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=licenseNo" }),
        __metadata("design:type", String)
    ], RelcsRequestBodyCertificateParameters.prototype, "licenseNo", void 0);
    return RelcsRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RelcsRequestBodyCertificateParameters = RelcsRequestBodyCertificateParameters;
var RelcsRequestBodyFormatEnum;
(function (RelcsRequestBodyFormatEnum) {
    RelcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(RelcsRequestBodyFormatEnum = exports.RelcsRequestBodyFormatEnum || (exports.RelcsRequestBodyFormatEnum = {}));
var RelcsRequestBody = /** @class */ (function (_super) {
    __extends(RelcsRequestBody, _super);
    function RelcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RelcsRequestBodyCertificateParameters)
    ], RelcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RelcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RelcsRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RelcsRequestBody.prototype, "txnId", void 0);
    return RelcsRequestBody;
}(utils_1.SpeakeasyBase));
exports.RelcsRequestBody = RelcsRequestBody;
var RelcsSecurity = /** @class */ (function (_super) {
    __extends(RelcsSecurity, _super);
    function RelcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RelcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RelcsSecurity.prototype, "clientId", void 0);
    return RelcsSecurity;
}(utils_1.SpeakeasyBase));
exports.RelcsSecurity = RelcsSecurity;
var Relcs400ApplicationJsonErrorEnum;
(function (Relcs400ApplicationJsonErrorEnum) {
    Relcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Relcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Relcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Relcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Relcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Relcs400ApplicationJsonErrorEnum = exports.Relcs400ApplicationJsonErrorEnum || (exports.Relcs400ApplicationJsonErrorEnum = {}));
var Relcs400ApplicationJsonErrorDescriptionEnum;
(function (Relcs400ApplicationJsonErrorDescriptionEnum) {
    Relcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Relcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Relcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Relcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Relcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Relcs400ApplicationJsonErrorDescriptionEnum = exports.Relcs400ApplicationJsonErrorDescriptionEnum || (exports.Relcs400ApplicationJsonErrorDescriptionEnum = {}));
var Relcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs400ApplicationJson, _super);
    function Relcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Relcs400ApplicationJson = Relcs400ApplicationJson;
var Relcs401ApplicationJsonErrorEnum;
(function (Relcs401ApplicationJsonErrorEnum) {
    Relcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Relcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Relcs401ApplicationJsonErrorEnum = exports.Relcs401ApplicationJsonErrorEnum || (exports.Relcs401ApplicationJsonErrorEnum = {}));
var Relcs401ApplicationJsonErrorDescriptionEnum;
(function (Relcs401ApplicationJsonErrorDescriptionEnum) {
    Relcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Relcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Relcs401ApplicationJsonErrorDescriptionEnum = exports.Relcs401ApplicationJsonErrorDescriptionEnum || (exports.Relcs401ApplicationJsonErrorDescriptionEnum = {}));
var Relcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs401ApplicationJson, _super);
    function Relcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Relcs401ApplicationJson = Relcs401ApplicationJson;
var Relcs404ApplicationJsonErrorEnum;
(function (Relcs404ApplicationJsonErrorEnum) {
    Relcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Relcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Relcs404ApplicationJsonErrorEnum = exports.Relcs404ApplicationJsonErrorEnum || (exports.Relcs404ApplicationJsonErrorEnum = {}));
var Relcs404ApplicationJsonErrorDescriptionEnum;
(function (Relcs404ApplicationJsonErrorDescriptionEnum) {
    Relcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Relcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Relcs404ApplicationJsonErrorDescriptionEnum = exports.Relcs404ApplicationJsonErrorDescriptionEnum || (exports.Relcs404ApplicationJsonErrorDescriptionEnum = {}));
var Relcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs404ApplicationJson, _super);
    function Relcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Relcs404ApplicationJson = Relcs404ApplicationJson;
var Relcs500ApplicationJsonErrorEnum;
(function (Relcs500ApplicationJsonErrorEnum) {
    Relcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Relcs500ApplicationJsonErrorEnum = exports.Relcs500ApplicationJsonErrorEnum || (exports.Relcs500ApplicationJsonErrorEnum = {}));
var Relcs500ApplicationJsonErrorDescriptionEnum;
(function (Relcs500ApplicationJsonErrorDescriptionEnum) {
    Relcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Relcs500ApplicationJsonErrorDescriptionEnum = exports.Relcs500ApplicationJsonErrorDescriptionEnum || (exports.Relcs500ApplicationJsonErrorDescriptionEnum = {}));
var Relcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs500ApplicationJson, _super);
    function Relcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Relcs500ApplicationJson = Relcs500ApplicationJson;
var Relcs502ApplicationJsonErrorEnum;
(function (Relcs502ApplicationJsonErrorEnum) {
    Relcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Relcs502ApplicationJsonErrorEnum = exports.Relcs502ApplicationJsonErrorEnum || (exports.Relcs502ApplicationJsonErrorEnum = {}));
var Relcs502ApplicationJsonErrorDescriptionEnum;
(function (Relcs502ApplicationJsonErrorDescriptionEnum) {
    Relcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Relcs502ApplicationJsonErrorDescriptionEnum = exports.Relcs502ApplicationJsonErrorDescriptionEnum || (exports.Relcs502ApplicationJsonErrorDescriptionEnum = {}));
var Relcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs502ApplicationJson, _super);
    function Relcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Relcs502ApplicationJson = Relcs502ApplicationJson;
var Relcs503ApplicationJsonErrorEnum;
(function (Relcs503ApplicationJsonErrorEnum) {
    Relcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Relcs503ApplicationJsonErrorEnum = exports.Relcs503ApplicationJsonErrorEnum || (exports.Relcs503ApplicationJsonErrorEnum = {}));
var Relcs503ApplicationJsonErrorDescriptionEnum;
(function (Relcs503ApplicationJsonErrorDescriptionEnum) {
    Relcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Relcs503ApplicationJsonErrorDescriptionEnum = exports.Relcs503ApplicationJsonErrorDescriptionEnum || (exports.Relcs503ApplicationJsonErrorDescriptionEnum = {}));
var Relcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs503ApplicationJson, _super);
    function Relcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Relcs503ApplicationJson = Relcs503ApplicationJson;
var Relcs504ApplicationJsonErrorEnum;
(function (Relcs504ApplicationJsonErrorEnum) {
    Relcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Relcs504ApplicationJsonErrorEnum = exports.Relcs504ApplicationJsonErrorEnum || (exports.Relcs504ApplicationJsonErrorEnum = {}));
var Relcs504ApplicationJsonErrorDescriptionEnum;
(function (Relcs504ApplicationJsonErrorDescriptionEnum) {
    Relcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Relcs504ApplicationJsonErrorDescriptionEnum = exports.Relcs504ApplicationJsonErrorDescriptionEnum || (exports.Relcs504ApplicationJsonErrorDescriptionEnum = {}));
var Relcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Relcs504ApplicationJson, _super);
    function Relcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Relcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Relcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Relcs504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Relcs504ApplicationJson = Relcs504ApplicationJson;
var RelcsRequest = /** @class */ (function (_super) {
    __extends(RelcsRequest, _super);
    function RelcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RelcsRequestBody)
    ], RelcsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RelcsSecurity)
    ], RelcsRequest.prototype, "security", void 0);
    return RelcsRequest;
}(utils_1.SpeakeasyBase));
exports.RelcsRequest = RelcsRequest;
var RelcsResponse = /** @class */ (function (_super) {
    __extends(RelcsResponse, _super);
    function RelcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RelcsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RelcsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Relcs400ApplicationJson)
    ], RelcsResponse.prototype, "relcs400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Relcs401ApplicationJson)
    ], RelcsResponse.prototype, "relcs401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Relcs404ApplicationJson)
    ], RelcsResponse.prototype, "relcs404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Relcs500ApplicationJson)
    ], RelcsResponse.prototype, "relcs500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Relcs502ApplicationJson)
    ], RelcsResponse.prototype, "relcs502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Relcs503ApplicationJson)
    ], RelcsResponse.prototype, "relcs503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Relcs504ApplicationJson)
    ], RelcsResponse.prototype, "relcs504ApplicationJSONObject", void 0);
    return RelcsResponse;
}(utils_1.SpeakeasyBase));
exports.RelcsResponse = RelcsResponse;
