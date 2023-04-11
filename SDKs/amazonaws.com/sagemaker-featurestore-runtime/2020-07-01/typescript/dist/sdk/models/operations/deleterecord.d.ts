import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteRecordRequest extends SpeakeasyBase {
    /**
     * Timestamp indicating when the deletion event occurred. <code>EventTime</code> can be used to query data at a certain point in time.
     */
    eventTime: string;
    /**
     * The name of the feature group to delete the record from.
     */
    featureGroupName: string;
    /**
     * The value for the <code>RecordIdentifier</code> that uniquely identifies the record, in string format.
     */
    recordIdentifierValueAsString: string;
    /**
     * A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the <code>FeatureGroup</code>.
     */
    targetStores?: shared.TargetStoreEnum[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRecordResponse extends SpeakeasyBase {
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
