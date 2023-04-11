import { SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";
/**
 * <p>Information about the engagement resolution steps. The resolution starts from the first contact, which can be an escalation plan, then resolves to an on-call rotation, and finally to a personal contact.</p> <p>The <code>ResolutionContact</code> structure describes the information for each node or step in that process. It contains information about different contact types, such as the escalation, rotation, and personal contacts.</p>
 */
export declare class ResolutionContact extends SpeakeasyBase {
    contactArn: string;
    stageIndex?: number;
    type: ContactTypeEnum;
}
