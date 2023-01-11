package openapisdk.models.shared;



public class AcademicCertificateSchemaCertificateData {
    public AcademicCertificateSchemaCertificateDataExamination examination;
    public AcademicCertificateSchemaCertificateData withExamination(AcademicCertificateSchemaCertificateDataExamination examination) {
        this.examination = examination;
        return this;
    }
    public AcademicCertificateSchemaCertificateDataPerformance performance;
    public AcademicCertificateSchemaCertificateData withPerformance(AcademicCertificateSchemaCertificateDataPerformance performance) {
        this.performance = performance;
        return this;
    }
    public AcademicCertificateSchemaCertificateDataSchool school;
    public AcademicCertificateSchemaCertificateData withSchool(AcademicCertificateSchemaCertificateDataSchool school) {
        this.school = school;
        return this;
    }
}