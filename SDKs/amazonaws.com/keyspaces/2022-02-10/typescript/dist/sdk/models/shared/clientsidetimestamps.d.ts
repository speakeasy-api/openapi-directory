import { SpeakeasyBase } from "../../../internal/utils";
import { ClientSideTimestampsStatusEnum } from "./clientsidetimestampsstatusenum";
/**
 * <p>The client-side timestamp setting of the table.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/client-side-timestamps-how-it-works.html">How it works: Amazon Keyspaces client-side timestamps</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 */
export declare class ClientSideTimestamps extends SpeakeasyBase {
    status: ClientSideTimestampsStatusEnum;
}
