import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateStemmingOptionsRequest extends SpeakeasyBase {
    /**
     * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
     */
    domainName: string;
    /**
     * Maps terms to their stems, serialized as a JSON document. The document has a single object with one property "stems" whose value is an object mapping terms to their stems. The maximum size of a stemming document is 500 KB. Example: <code>{ "stems": {"people": "person", "walking": "walk"} }</code>
     */
    stems: string;
}
