import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action.</p> </note>
 */
export declare class AccessKeyLastUsed extends SpeakeasyBase {
    lastUsedDate?: Date;
    region?: string;
    serviceName?: string;
}
