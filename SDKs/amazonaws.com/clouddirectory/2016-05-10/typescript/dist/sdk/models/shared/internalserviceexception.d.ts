import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.
 */
export declare class InternalServiceException extends SpeakeasyBase {
    message?: string;
}
