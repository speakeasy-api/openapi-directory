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
exports.MalcsResponse = exports.MalcsRequest = exports.Malcs504ApplicationJson = exports.Malcs504ApplicationJsonErrorDescriptionEnum = exports.Malcs504ApplicationJsonErrorEnum = exports.Malcs503ApplicationJson = exports.Malcs503ApplicationJsonErrorDescriptionEnum = exports.Malcs503ApplicationJsonErrorEnum = exports.Malcs502ApplicationJson = exports.Malcs502ApplicationJsonErrorDescriptionEnum = exports.Malcs502ApplicationJsonErrorEnum = exports.Malcs500ApplicationJson = exports.Malcs500ApplicationJsonErrorDescriptionEnum = exports.Malcs500ApplicationJsonErrorEnum = exports.Malcs404ApplicationJson = exports.Malcs404ApplicationJsonErrorDescriptionEnum = exports.Malcs404ApplicationJsonErrorEnum = exports.Malcs401ApplicationJson = exports.Malcs401ApplicationJsonErrorDescriptionEnum = exports.Malcs401ApplicationJsonErrorEnum = exports.Malcs400ApplicationJson = exports.Malcs400ApplicationJsonErrorDescriptionEnum = exports.Malcs400ApplicationJsonErrorEnum = exports.MalcsSecurity = exports.MalcsRequestBody = exports.MalcsRequestBodyFormatEnum = exports.MalcsRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MalcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MalcsRequestBodyCertificateParameters, _super);
    function MalcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], MalcsRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], MalcsRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return MalcsRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MalcsRequestBodyCertificateParameters = MalcsRequestBodyCertificateParameters;
var MalcsRequestBodyFormatEnum;
(function (MalcsRequestBodyFormatEnum) {
    MalcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(MalcsRequestBodyFormatEnum = exports.MalcsRequestBodyFormatEnum || (exports.MalcsRequestBodyFormatEnum = {}));
var MalcsRequestBody = /** @class */ (function (_super) {
    __extends(MalcsRequestBody, _super);
    function MalcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MalcsRequestBodyCertificateParameters)
    ], MalcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MalcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MalcsRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MalcsRequestBody.prototype, "txnId", void 0);
    return MalcsRequestBody;
}(utils_1.SpeakeasyBase));
exports.MalcsRequestBody = MalcsRequestBody;
var MalcsSecurity = /** @class */ (function (_super) {
    __extends(MalcsSecurity, _super);
    function MalcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MalcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MalcsSecurity.prototype, "clientId", void 0);
    return MalcsSecurity;
}(utils_1.SpeakeasyBase));
exports.MalcsSecurity = MalcsSecurity;
var Malcs400ApplicationJsonErrorEnum;
(function (Malcs400ApplicationJsonErrorEnum) {
    Malcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Malcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Malcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Malcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Malcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Malcs400ApplicationJsonErrorEnum = exports.Malcs400ApplicationJsonErrorEnum || (exports.Malcs400ApplicationJsonErrorEnum = {}));
var Malcs400ApplicationJsonErrorDescriptionEnum;
(function (Malcs400ApplicationJsonErrorDescriptionEnum) {
    Malcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Malcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Malcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Malcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Malcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Malcs400ApplicationJsonErrorDescriptionEnum = exports.Malcs400ApplicationJsonErrorDescriptionEnum || (exports.Malcs400ApplicationJsonErrorDescriptionEnum = {}));
var Malcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs400ApplicationJson, _super);
    function Malcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Malcs400ApplicationJson = Malcs400ApplicationJson;
var Malcs401ApplicationJsonErrorEnum;
(function (Malcs401ApplicationJsonErrorEnum) {
    Malcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Malcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Malcs401ApplicationJsonErrorEnum = exports.Malcs401ApplicationJsonErrorEnum || (exports.Malcs401ApplicationJsonErrorEnum = {}));
var Malcs401ApplicationJsonErrorDescriptionEnum;
(function (Malcs401ApplicationJsonErrorDescriptionEnum) {
    Malcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Malcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Malcs401ApplicationJsonErrorDescriptionEnum = exports.Malcs401ApplicationJsonErrorDescriptionEnum || (exports.Malcs401ApplicationJsonErrorDescriptionEnum = {}));
var Malcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs401ApplicationJson, _super);
    function Malcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Malcs401ApplicationJson = Malcs401ApplicationJson;
var Malcs404ApplicationJsonErrorEnum;
(function (Malcs404ApplicationJsonErrorEnum) {
    Malcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Malcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Malcs404ApplicationJsonErrorEnum = exports.Malcs404ApplicationJsonErrorEnum || (exports.Malcs404ApplicationJsonErrorEnum = {}));
var Malcs404ApplicationJsonErrorDescriptionEnum;
(function (Malcs404ApplicationJsonErrorDescriptionEnum) {
    Malcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Malcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Malcs404ApplicationJsonErrorDescriptionEnum = exports.Malcs404ApplicationJsonErrorDescriptionEnum || (exports.Malcs404ApplicationJsonErrorDescriptionEnum = {}));
var Malcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs404ApplicationJson, _super);
    function Malcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Malcs404ApplicationJson = Malcs404ApplicationJson;
var Malcs500ApplicationJsonErrorEnum;
(function (Malcs500ApplicationJsonErrorEnum) {
    Malcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Malcs500ApplicationJsonErrorEnum = exports.Malcs500ApplicationJsonErrorEnum || (exports.Malcs500ApplicationJsonErrorEnum = {}));
var Malcs500ApplicationJsonErrorDescriptionEnum;
(function (Malcs500ApplicationJsonErrorDescriptionEnum) {
    Malcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Malcs500ApplicationJsonErrorDescriptionEnum = exports.Malcs500ApplicationJsonErrorDescriptionEnum || (exports.Malcs500ApplicationJsonErrorDescriptionEnum = {}));
var Malcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs500ApplicationJson, _super);
    function Malcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Malcs500ApplicationJson = Malcs500ApplicationJson;
var Malcs502ApplicationJsonErrorEnum;
(function (Malcs502ApplicationJsonErrorEnum) {
    Malcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Malcs502ApplicationJsonErrorEnum = exports.Malcs502ApplicationJsonErrorEnum || (exports.Malcs502ApplicationJsonErrorEnum = {}));
var Malcs502ApplicationJsonErrorDescriptionEnum;
(function (Malcs502ApplicationJsonErrorDescriptionEnum) {
    Malcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Malcs502ApplicationJsonErrorDescriptionEnum = exports.Malcs502ApplicationJsonErrorDescriptionEnum || (exports.Malcs502ApplicationJsonErrorDescriptionEnum = {}));
var Malcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs502ApplicationJson, _super);
    function Malcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Malcs502ApplicationJson = Malcs502ApplicationJson;
var Malcs503ApplicationJsonErrorEnum;
(function (Malcs503ApplicationJsonErrorEnum) {
    Malcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Malcs503ApplicationJsonErrorEnum = exports.Malcs503ApplicationJsonErrorEnum || (exports.Malcs503ApplicationJsonErrorEnum = {}));
var Malcs503ApplicationJsonErrorDescriptionEnum;
(function (Malcs503ApplicationJsonErrorDescriptionEnum) {
    Malcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Malcs503ApplicationJsonErrorDescriptionEnum = exports.Malcs503ApplicationJsonErrorDescriptionEnum || (exports.Malcs503ApplicationJsonErrorDescriptionEnum = {}));
var Malcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs503ApplicationJson, _super);
    function Malcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Malcs503ApplicationJson = Malcs503ApplicationJson;
var Malcs504ApplicationJsonErrorEnum;
(function (Malcs504ApplicationJsonErrorEnum) {
    Malcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Malcs504ApplicationJsonErrorEnum = exports.Malcs504ApplicationJsonErrorEnum || (exports.Malcs504ApplicationJsonErrorEnum = {}));
var Malcs504ApplicationJsonErrorDescriptionEnum;
(function (Malcs504ApplicationJsonErrorDescriptionEnum) {
    Malcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Malcs504ApplicationJsonErrorDescriptionEnum = exports.Malcs504ApplicationJsonErrorDescriptionEnum || (exports.Malcs504ApplicationJsonErrorDescriptionEnum = {}));
var Malcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Malcs504ApplicationJson, _super);
    function Malcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Malcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Malcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Malcs504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Malcs504ApplicationJson = Malcs504ApplicationJson;
var MalcsRequest = /** @class */ (function (_super) {
    __extends(MalcsRequest, _super);
    function MalcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MalcsRequestBody)
    ], MalcsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MalcsSecurity)
    ], MalcsRequest.prototype, "security", void 0);
    return MalcsRequest;
}(utils_1.SpeakeasyBase));
exports.MalcsRequest = MalcsRequest;
var MalcsResponse = /** @class */ (function (_super) {
    __extends(MalcsResponse, _super);
    function MalcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MalcsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MalcsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Malcs400ApplicationJson)
    ], MalcsResponse.prototype, "malcs400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Malcs401ApplicationJson)
    ], MalcsResponse.prototype, "malcs401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Malcs404ApplicationJson)
    ], MalcsResponse.prototype, "malcs404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Malcs500ApplicationJson)
    ], MalcsResponse.prototype, "malcs500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Malcs502ApplicationJson)
    ], MalcsResponse.prototype, "malcs502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Malcs503ApplicationJson)
    ], MalcsResponse.prototype, "malcs503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Malcs504ApplicationJson)
    ], MalcsResponse.prototype, "malcs504ApplicationJSONObject", void 0);
    return MalcsResponse;
}(utils_1.SpeakeasyBase));
exports.MalcsResponse = MalcsResponse;
