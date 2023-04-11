import { SpeakeasyBase } from "../../../internal/utils";
import { EnumOption } from "./enumoption";
import { UserCompact } from "./usercompact";
/**
 * *Conditional*. A unique identifier to associate this field with the template source of truth.
 */
export declare enum CustomFieldSettingResponseCustomFieldAsanaCreatedFieldEnum {
    AVRequirements = "a_v_requirements",
    AccountName = "account_name",
    Actionable = "actionable",
    AlignShippingLink = "align_shipping_link",
    AlignStatus = "align_status",
    AllottedTime = "allotted_time",
    Appointment = "appointment",
    ApprovalStage = "approval_stage",
    Approved = "approved",
    ArticleSeries = "article_series",
    BoardCommittee = "board_committee",
    Browser = "browser",
    CampaignAudience = "campaign_audience",
    CampaignProjectStatus = "campaign_project_status",
    CampaignRegions = "campaign_regions",
    ChannelPrimary = "channel_primary",
    ClientTopicType = "client_topic_type",
    CompleteBy = "complete_by",
    Contact = "contact",
    ContactEmailAddress = "contact_email_address",
    ContentChannels = "content_channels",
    ContentChannelsNeeded = "content_channels_needed",
    ContentStage = "content_stage",
    ContentType = "content_type",
    Contract = "contract",
    ContractStatus = "contract_status",
    Cost = "cost",
    CreationStage = "creation_stage",
    CreativeChannel = "creative_channel",
    CreativeNeeded = "creative_needed",
    CreativeNeeds = "creative_needs",
    DataSensitivity = "data_sensitivity",
    DealSize = "deal_size",
    DeliveryAppt = "delivery_appt",
    DeliveryApptDate = "delivery_appt_date",
    Department = "department",
    DepartmentResponsible = "department_responsible",
    DesignRequestNeeded = "design_request_needed",
    DesignRequestType = "design_request_type",
    DiscussionCategory = "discussion_category",
    DoThisTask = "do_this_task",
    EditorialContentStatus = "editorial_content_status",
    EditorialContentTag = "editorial_content_tag",
    EditorialContentType = "editorial_content_type",
    Effort = "effort",
    EffortLevel = "effort_level",
    EstCompletionDate = "est_completion_date",
    EstimatedTime = "estimated_time",
    EstimatedValue = "estimated_value",
    ExpectedCost = "expected_cost",
    ExternalStepsNeeded = "external_steps_needed",
    FavoriteIdea = "favorite_idea",
    FeedbackType = "feedback_type",
    Financial = "financial",
    FundingAmount = "funding_amount",
    GrantApplicationProcess = "grant_application_process",
    HiringCandidateStatus = "hiring_candidate_status",
    IdeaStatus = "idea_status",
    IdsLink = "ids_link",
    IdsPatientLink = "ids_patient_link",
    ImplementationStage = "implementation_stage",
    Insurance = "insurance",
    InterviewArea = "interview_area",
    InterviewQuestionScore = "interview_question_score",
    IteroScanLink = "itero_scan_link",
    JobSAppliedTo = "job_s_applied_to",
    Lab = "lab",
    LaunchStatus = "launch_status",
    LeadStatus = "lead_status",
    LocalizationLanguage = "localization_language",
    LocalizationMarketTeam = "localization_market_team",
    LocalizationStatus = "localization_status",
    MeetingMinutes = "meeting_minutes",
    MeetingNeeded = "meeting_needed",
    Minutes = "minutes",
    Mrr = "mrr",
    MustLocalize = "must_localize",
    NameOfFoundation = "name_of_foundation",
    NeedToFollowUp = "need_to_follow_up",
    NextAppointment = "next_appointment",
    NextStepsSales = "next_steps_sales",
    NumPeople = "num_people",
    NumberOfUserReports = "number_of_user_reports",
    OfficeLocation = "office_location",
    OnboardingActivity = "onboarding_activity",
    Owner = "owner",
    ParticipantsNeeded = "participants_needed",
    PatientDateOfBirth = "patient_date_of_birth",
    PatientEmail = "patient_email",
    PatientPhone = "patient_phone",
    PatientStatus = "patient_status",
    PhoneNumber = "phone_number",
    PlanningCategory = "planning_category",
    PointOfContact = "point_of_contact",
    Position = "position",
    PostFormat = "post_format",
    Prescription = "prescription",
    Priority = "priority",
    PriorityLevel = "priority_level",
    Product = "product",
    ProductStage = "product_stage",
    Progress = "progress",
    ProjectSize = "project_size",
    ProjectStatus = "project_status",
    ProposedBudget = "proposed_budget",
    PublishStatus = "publish_status",
    ReasonForScan = "reason_for_scan",
    Referral = "referral",
    RequestType = "request_type",
    ResearchStatus = "research_status",
    ResponsibleDepartment = "responsible_department",
    ResponsibleTeam = "responsible_team",
    RiskAssessmentStatus = "risk_assessment_status",
    RoomName = "room_name",
    SalesCounterpart = "sales_counterpart",
    Sentiment = "sentiment",
    ShippingLink = "shipping_link",
    SocialChannels = "social_channels",
    Stage = "stage",
    Status = "status",
    StatusDesign = "status_design",
    StatusOfInitiative = "status_of_initiative",
    SystemSetup = "system_setup",
    TaskProgress = "task_progress",
    Team = "team",
    TeamMarketing = "team_marketing",
    TeamResponsible = "team_responsible",
    TimeItTakesToCompleteTasks = "time_it_takes_to_complete_tasks",
    Timeframe = "timeframe",
    TreatmentType = "treatment_type",
    TypeWorkRequestsIt = "type_work_requests_it",
    UseAgency = "use_agency",
    UserName = "user_name",
    VendorCategory = "vendor_category",
    VendorType = "vendor_type",
    WordCount = "word_count"
}
/**
 * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
 */
export declare enum CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum {
    Prefix = "prefix",
    Suffix = "suffix"
}
/**
 * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
 */
export declare class CustomFieldSettingResponseCustomFieldDateValue extends SpeakeasyBase {
    /**
     * A string representing the date in YYYY-MM-DD format.
     */
    date?: string;
    /**
     * A string representing the date in ISO 8601 format. If no time value is selected, the value of `date-time` will be `null`.
     */
    dateTime?: string;
}
/**
 * Enum options are the possible values which an enum custom field can adopt. An enum custom field must contain at least 1 enum option but no more than 500.
 *
 * @remarks
 *
 * You can add enum options to a custom field by using the `POST /custom_fields/custom_field_gid/enum_options` endpoint.
 *
 * **It is not possible to remove or delete an enum option**. Instead, enum options can be disabled by updating the `enabled` field to false with the `PUT /enum_options/enum_option_gid` endpoint. Other attributes can be updated similarly.
 *
 * On creation of an enum option, `enabled` is always set to `true`, meaning the enum option is a selectable value for the custom field. Setting `enabled=false` is equivalent to “trashing” the enum option in the Asana web app within the “Edit Fields” dialog. The enum option will no longer be selectable but, if the enum option value was previously set within a task, the task will retain the value.
 *
 * Enum options are an ordered list and by default new enum options are inserted at the end. Ordering in relation to existing enum options can be specified on creation by using `insert_before` or `insert_after` to reference an existing enum option. Only one of `insert_before` and `insert_after` can be provided when creating a new enum option.
 *
 * An enum options list can be reordered with the `POST /custom_fields/custom_field_gid/enum_options/insert` endpoint.
 */
export declare class CustomFieldSettingResponseCustomFieldEnumValue extends SpeakeasyBase {
    /**
     * The color of the enum option. Defaults to ‘none’.
     */
    color?: string;
    /**
     * Whether or not the enum option is a selectable value for the custom field.
     */
    enabled?: boolean;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the enum option.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * The format of this custom field.
 */
export declare enum CustomFieldSettingResponseCustomFieldFormatEnum {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none"
}
/**
 * The type of the custom field. Must be one of the given values.
 *
 * @remarks
 *
 */
export declare enum CustomFieldSettingResponseCustomFieldResourceSubtypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number",
    Date = "date",
    People = "people"
}
/**
 * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.
 *
 * @remarks
 *
 */
export declare enum CustomFieldSettingResponseCustomFieldTypeEnum {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number"
}
/**
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 *
 * @remarks
 *
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
 */
export declare class CustomFieldSettingResponseCustomField extends SpeakeasyBase {
    /**
     * *Conditional*. A unique identifier to associate this field with the template source of truth.
     */
    asanaCreatedField?: CustomFieldSettingResponseCustomFieldAsanaCreatedFieldEnum;
    createdBy?: UserCompact;
    /**
     * ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
     */
    currencyCode?: string;
    /**
     * This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.
     */
    customLabel?: string;
    /**
     * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
     */
    customLabelPosition?: CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum;
    /**
     * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
     */
    dateValue?: CustomFieldSettingResponseCustomFieldDateValue;
    /**
     * [Opt In](/docs/input-output-options). The description of the custom field.
     */
    description?: string;
    /**
     * A string representation for the value of the custom field. Integrations that don't require the underlying type should use this field to read values. Using this field will future-proof an app against new custom field types.
     */
    displayValue?: string;
    /**
     * *Conditional*. Determines if the custom field is enabled or not.
     */
    enabled?: boolean;
    /**
     * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
     */
    enumOptions?: EnumOption[];
    enumValue?: CustomFieldSettingResponseCustomFieldEnumValue;
    /**
     * The format of this custom field.
     */
    format?: CustomFieldSettingResponseCustomFieldFormatEnum;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
     */
    hasNotificationsEnabled?: boolean;
    /**
     * This flag describes whether this custom field is available to every container in the workspace. Before project-specific custom fields, this field was always true.
     */
    isGlobalToWorkspace?: boolean;
    /**
     * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
     */
    multiEnumValues?: EnumOption[];
    /**
     * The name of the custom field.
     */
    name?: string;
    /**
     * *Conditional*. This number is the value of a `number` custom field.
     */
    numberValue?: number;
    /**
     * *Conditional*. Only relevant for custom fields of type `people`. This array of [compact user](/docs/user-compact) objects reflects the values of a `people` custom field.
     */
    peopleValue?: UserCompact[];
    /**
     * Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.
     *
     * @remarks
     * For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.
     * The identifier format will always have a precision of 0.
     */
    precision?: number;
    /**
     * The type of the custom field. Must be one of the given values.
     *
     * @remarks
     *
     */
    resourceSubtype?: CustomFieldSettingResponseCustomFieldResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * *Conditional*. This string is the value of a `text` custom field.
     */
    textValue?: string;
    /**
     * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.
     *
     * @remarks
     *
     */
    type?: CustomFieldSettingResponseCustomFieldTypeEnum;
}
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export declare class CustomFieldSettingResponseParent extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export declare class CustomFieldSettingResponseProject extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
 */
export declare class CustomFieldSettingResponse extends SpeakeasyBase {
    customField?: CustomFieldSettingResponseCustomField;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * `is_important` is used in the Asana web application to determine if this custom field is displayed in the list/grid view of a project or portfolio.
     */
    isImportant?: boolean;
    parent?: CustomFieldSettingResponseParent;
    project?: CustomFieldSettingResponseProject;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
