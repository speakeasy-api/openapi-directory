import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a position.
 */
export declare class ConfigureAccessPointRequestBodyPosition extends SpeakeasyBase {
    elevation?: number;
    elevationReference?: shared.ElevationReferenceEnum;
    elevationUnit?: shared.ElevationUnitEnum;
    latitude?: number;
    longitude?: number;
}
export declare class ConfigureAccessPointRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the network resource.
     */
    accessPointArn: string;
    /**
     * A Base64 encoded string of the CPI certificate associated with the CPI user who is certifying the coordinates of the network resource.
     */
    cpiSecretKey?: string;
    /**
     * The CPI user ID of the CPI user who is certifying the coordinates of the network resource.
     */
    cpiUserId?: string;
    /**
     * The CPI password associated with the CPI certificate in <code>cpiSecretKey</code>.
     */
    cpiUserPassword?: string;
    /**
     * The CPI user name of the CPI user who is certifying the coordinates of the radio unit.
     */
    cpiUsername?: string;
    /**
     * Information about a position.
     */
    position?: ConfigureAccessPointRequestBodyPosition;
}
export declare class ConfigureAccessPointRequest extends SpeakeasyBase {
    requestBody: ConfigureAccessPointRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ConfigureAccessPointResponse extends SpeakeasyBase {
    /**
     * Success
     */
    configureAccessPointResponse?: shared.ConfigureAccessPointResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
