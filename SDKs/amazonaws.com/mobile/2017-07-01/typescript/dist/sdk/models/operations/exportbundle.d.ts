import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Developer desktop or target mobile app or website platform.
 */
export declare enum ExportBundlePlatformEnum {
    Osx = "OSX",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Objc = "OBJC",
    Swift = "SWIFT",
    Android = "ANDROID",
    Javascript = "JAVASCRIPT"
}
export declare class ExportBundleRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  Unique bundle identifier.
     */
    bundleId: string;
    /**
     *  Developer desktop or target application platform.
     */
    platform?: ExportBundlePlatformEnum;
    /**
     *  Unique project identifier.
     */
    projectId?: string;
}
export declare class ExportBundleResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: shared.BadRequestException;
    contentType: string;
    /**
     * Success
     */
    exportBundleResult?: shared.ExportBundleResult;
    /**
     * InternalFailureException
     */
    internalFailureException?: shared.InternalFailureException;
    /**
     * NotFoundException
     */
    notFoundException?: shared.NotFoundException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: shared.ServiceUnavailableException;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: shared.TooManyRequestsException;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: shared.UnauthorizedException;
}
