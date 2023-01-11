package openapisdk.models.shared;



public class AcademicCertificateSchemaCertificateDataPerformance {
    public AcademicCertificateSchemaCertificateDataPerformanceSubjects[] subjects;
    public AcademicCertificateSchemaCertificateDataPerformance withSubjects(AcademicCertificateSchemaCertificateDataPerformanceSubjects[] subjects) {
        this.subjects = subjects;
        return this;
    }
    public String cgpa;
    public AcademicCertificateSchemaCertificateDataPerformance withCgpa(String cgpa) {
        this.cgpa = cgpa;
        return this;
    }
    public String cgpaMax;
    public AcademicCertificateSchemaCertificateDataPerformance withCgpaMax(String cgpaMax) {
        this.cgpaMax = cgpaMax;
        return this;
    }
    public String grade;
    public AcademicCertificateSchemaCertificateDataPerformance withGrade(String grade) {
        this.grade = grade;
        return this;
    }
    public String marksMax;
    public AcademicCertificateSchemaCertificateDataPerformance withMarksMax(String marksMax) {
        this.marksMax = marksMax;
        return this;
    }
    public String marksTotal;
    public AcademicCertificateSchemaCertificateDataPerformance withMarksTotal(String marksTotal) {
        this.marksTotal = marksTotal;
        return this;
    }
    public String percentage;
    public AcademicCertificateSchemaCertificateDataPerformance withPercentage(String percentage) {
        this.percentage = percentage;
        return this;
    }
    public String result;
    public AcademicCertificateSchemaCertificateDataPerformance withResult(String result) {
        this.result = result;
        return this;
    }
    public String resultDate;
    public AcademicCertificateSchemaCertificateDataPerformance withResultDate(String resultDate) {
        this.resultDate = resultDate;
        return this;
    }
    public String updateDate;
    public AcademicCertificateSchemaCertificateDataPerformance withUpdateDate(String updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}