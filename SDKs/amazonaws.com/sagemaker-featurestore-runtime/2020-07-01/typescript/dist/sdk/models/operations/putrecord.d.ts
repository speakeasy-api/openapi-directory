import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRecordRequestBody extends SpeakeasyBase {
    /**
     * <p>List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:</p> <ul> <li> <p>Use <code>GetRecord</code> to retrieve the latest record.</p> </li> <li> <p>Update the record returned from <code>GetRecord</code>. </p> </li> <li> <p>Use <code>PutRecord</code> to update feature values.</p> </li> </ul>
     */
    record: shared.FeatureValue[];
    /**
     * A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the <code>FeatureGroup</code>.
     */
    targetStores?: shared.TargetStoreEnum[];
}
export declare class PutRecordRequest extends SpeakeasyBase {
    /**
     * The name of the feature group that you want to insert the record into.
     */
    featureGroupName: string;
    requestBody: PutRecordRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutRecordResponse extends SpeakeasyBase {
    /**
     * AccessForbidden
     */
    accessForbidden?: any;
    contentType: string;
    /**
     * InternalFailure
     */
    internalFailure?: any;
    /**
     * ServiceUnavailable
     */
    serviceUnavailable?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationError
     */
    validationError?: any;
}
