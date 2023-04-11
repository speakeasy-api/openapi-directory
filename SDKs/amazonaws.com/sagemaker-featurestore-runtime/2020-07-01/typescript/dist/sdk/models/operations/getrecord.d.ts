import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecordRequest extends SpeakeasyBase {
    /**
     * The name of the feature group from which you want to retrieve a record.
     */
    featureGroupName: string;
    /**
     * List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.
     */
    featureName?: string[];
    /**
     * The value that corresponds to <code>RecordIdentifier</code> type and uniquely identifies the record in the <code>FeatureGroup</code>.
     */
    recordIdentifierValueAsString: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecordResponse extends SpeakeasyBase {
    /**
     * AccessForbidden
     */
    accessForbidden?: any;
    contentType: string;
    /**
     * Success
     */
    getRecordResponse?: shared.GetRecordResponse;
    /**
     * InternalFailure
     */
    internalFailure?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailable
     */
    serviceUnavailable?: any;
    /**
     * ValidationError
     */
    validationError?: any;
}
