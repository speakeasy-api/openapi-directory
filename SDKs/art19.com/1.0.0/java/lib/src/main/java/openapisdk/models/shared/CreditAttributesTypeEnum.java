package openapisdk.models.shared;


public enum CreditAttributesTypeEnum {
    ANCHOR_CREDIT("AnchorCredit"),
    ASSOCIATE_PRODUCER_CREDIT("AssociateProducerCredit"),
    AUTHOR_CREDIT("AuthorCredit"),
    CAST_CREDIT("CastCredit"),
    CO_HOST_CREDIT("CoHostCredit"),
    COMPOSER_CREDIT("ComposerCredit"),
    CREATOR_CREDIT("CreatorCredit"),
    CREDIT("Credit"),
    DIRECTOR_CREDIT("DirectorCredit"),
    EDITOR_CREDIT("EditorCredit"),
    ENGINEER_CREDIT("EngineerCredit"),
    EXECUTIVE_PRODUCER_CREDIT("ExecutiveProducerCredit"),
    GUEST_CO_HOST_CREDIT("GuestCoHostCredit"),
    GUEST_CREDIT("GuestCredit"),
    GUEST_HOST_CREDIT("GuestHostCredit"),
    HEAD_WRITER_CREDIT("HeadWriterCredit"),
    HOST_CREDIT("HostCredit"),
    PRODUCER_CREDIT("ProducerCredit"),
    REPORTER_CREDIT("ReporterCredit"),
    SENIOR_PRODUCER_CREDIT("SeniorProducerCredit"),
    SIDEKICK_CREDIT("SidekickCredit"),
    VIDEO_PRODUCER_CREDIT("VideoProducerCredit"),
    WRITER_CREDIT("WriterCredit");

    public final String value;

    private CreditAttributesTypeEnum(String value) {
        this.value = value;
    }
}
