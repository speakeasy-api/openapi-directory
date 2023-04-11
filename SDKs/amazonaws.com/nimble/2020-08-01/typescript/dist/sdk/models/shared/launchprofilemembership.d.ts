import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfilePersonaEnum } from "./launchprofilepersonaenum";
/**
 * <p>Studio admins can use launch profile membership to delegate launch profile access to studio users in the Nimble Studio portal without writing or maintaining complex IAM policies. A launch profile member is a user association from your studio identity source who is granted permissions to a launch profile.</p> <p>A launch profile member (type USER) provides the following permissions to that launch profile:</p> <ul> <li> <p>GetLaunchProfile</p> </li> <li> <p>GetLaunchProfileInitialization</p> </li> <li> <p>GetLaunchProfileMembers</p> </li> <li> <p>GetLaunchProfileMember</p> </li> <li> <p>CreateStreamingSession</p> </li> <li> <p>GetLaunchProfileDetails</p> </li> </ul>
 */
export declare class LaunchProfileMembership extends SpeakeasyBase {
    identityStoreId?: string;
    persona?: LaunchProfilePersonaEnum;
    principalId?: string;
    sid?: string;
}
