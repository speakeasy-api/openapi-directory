import { SpeakeasyBase } from "../../../internal/utils";
import { AccessMethod } from "./accessmethod";
import { GeneralName } from "./generalname";
/**
 * Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>.
 */
export declare class AccessDescription extends SpeakeasyBase {
    accessLocation: GeneralName;
    accessMethod: AccessMethod;
}
