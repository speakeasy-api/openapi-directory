import { SpeakeasyBase } from "../../../internal/utils";
/**
 * You can pass custom key-value pair attributes when you assume a role or federate a user. These are called session tags. You can then use the session tags to control access to resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Tagging Amazon Web Services STS Sessions</a> in the <i>IAM User Guide</i>.
 */
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
