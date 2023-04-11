import { SpeakeasyBase } from "../../../internal/utils";
import { TimeToLiveStatusEnum } from "./timetolivestatusenum";
/**
 * <p>Enable custom Time to Live (TTL) settings for rows and columns without setting a TTL default for the specified table.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_enabling">Enabling TTL on tables</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 */
export declare class TimeToLive extends SpeakeasyBase {
    status: TimeToLiveStatusEnum;
}
