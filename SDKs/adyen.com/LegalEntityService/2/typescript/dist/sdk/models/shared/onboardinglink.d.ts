import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class OnboardingLink extends SpeakeasyBase {
    /**
     * The URL of the hosted onboarding page where you need to redirect your user. This URL expires after 4 minutes and can only be used once.
     *
     * @remarks
     *
     * If the link expires, you need to create a new link.
     */
    url?: string;
}
